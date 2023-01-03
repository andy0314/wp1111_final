import { Router } from "express";
import Course from "../models/Course";

const router = Router();

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

router.get('/datainit', async(_, res) =>{
    const semester = ['111-2'];
    
    const puppeteer = require('puppeteer');
    const cheerio = require('cheerio');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await Course.deleteMany({});
    await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?alltime=yes&allproced=yes&cstype=1&csname=&current_sem=${semester[0]}&op=stu&page_cnt=150&startrec=0`)
    
    let _body = await page.content();
    let _$ = await cheerio.load(_body);
    const getNumber = _$("td").find('font[color="#CC0033"] > b').toArray().map(ele => _$(ele).text());
    const num = Number(getNumber[0]);

    let start = 0;
    let loaded = 0;

    console.log("start loading courses")
    
    while(start < num){
        await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?alltime=yes&allproced=yes&cstype=1&csname=&current_sem=${semester[0]}&op=stu&page_cnt=150&startrec=${start}`);
        start += 150;
        let body = await page.content();
        let $ = await cheerio.load(body);

        let x = 0;
        
        const data = $("table").find('tbody > tr[align="center"]').toArray().map(ele => $(ele).find('td').toArray().map(ele2 => $(ele2).text()));
        for(var i = 1; i < data.length; i++){
            if(data[i][0].length !== 5){
                const name = data[i][4].slice(1);
                const exist = await Course.findOne({course_name: name});
                if(!exist){                    
                    let newCourse = new Course;
                    newCourse._id = `111-2-0-${x}---`;
                    x = x + 1;
                    newCourse.course_id = '00000';
                    newCourse.department = [data[i][1]];
                    newCourse.course_code = data[i][2];
                    newCourse.class_id = data[i][3];
                    newCourse.course_name = data[i][4].slice(1);
                    newCourse.field = data[i][5];
                    newCourse.credit = Number(data[i][6].slice(0, 1));
                    newCourse.course_id_ = data[i][7];
                    newCourse.half_year = (data[i][8] === '半年');
                    newCourse.course_type = data[i][9];
                    newCourse.teacher = null;
                    newCourse.method = '0';
                    newCourse.time_place = null;
                    newCourse.max_student = null;
                    newCourse.limit = null;
                    newCourse.note = null;
                    await newCourse.save()
                    loaded++;
                }
                else{
                    if(data[i][1] !== String.fromCharCode(160)){
                        await Course.updateOne({course_name: name}, {
                            $push: {department: data[i][1]}
                        });
                    }
                }
            }
            else{
                const id = data[i][0];
                const exist = await Course.findOne({course_id: id});
                if(!exist){
                    let newCourse = new Course;
                    newCourse._id = "111-2-"+id+"-";
                    newCourse.course_id = data[i][0];
                    newCourse.department = [data[i][1]];
                    newCourse.course_code = data[i][2];
                    newCourse.class_id = data[i][3];
                    newCourse.course_name = data[i][4].slice(1);
                    newCourse.field = data[i][5];
                    newCourse.credit = Number(data[i][6].slice(0, 1));
                    newCourse.course_id_ = data[i][7];
                    newCourse.half_year = (data[i][8] === '半年');
                    newCourse.course_type = data[i][9];
                    newCourse.teacher = data[i][10]
                    newCourse.method = data[i][11];
                    newCourse.time_place = data[i][12];
                    newCourse.max_student = data[i][13];
                    newCourse.limit = data[i][14];
                    newCourse.note = data[i][15];
                    await newCourse.save();
                    loaded++;
                }
                else{
                    await Course.updateOne({course_id: id}, {
                        $push: {department: data[i][1]}
                    });
                }
            }
        }
        console.log(`course loading progress to ${start}, total is ${num}`)
    }

    console.log(`loaded ${loaded} courses`);
    console.log(`loading general courses`);

    const field_name = ["", "文學與藝術", "歷史思維", "世界文明", "哲學與道德思考", "公民意識與社會分析", "量化分析與數學素養", "物質科學", "生命科學"]

    for(var i = 1; i <= 8; i++){
        await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=111-2&cstype=8&csname=A${i}&alltime=yes&allproced=yes&allsel=yes&page_cnt=150&Submit22=%E6%9F%A5%E8%A9%A2`);
        let body = await page.content();
        let $ = await cheerio.load(body);
        const data = $("table").find('tbody > tr[align="center"]').toArray().map(ele => $(ele).find('td').toArray().map(ele2 => $(ele2).text()));
        for(var x = 1; x < data.length; x++){
            if(data[x][15].includes(field_name[i]) || data[x][15].includes("通識")){
                await Course.findOneAndUpdate({course_id: data[x][0]}, {
                    $push: {general: i}
                })
            }
        }
        for(var y = i + 1; y <= 8; y++){
            await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=111-2&cstype=8&csname=A${i}${y}&alltime=yes&allproced=yes&allsel=yes&page_cnt=150&Submit22=%E6%9F%A5%E8%A9%A2`);
            let body2 = await page.content();
            let $$ = await cheerio.load(body2);
            const data2 = $$("table").find('tbody > tr[align="center"]').toArray().map(ele => $$(ele).find('td').toArray().map(ele2 => $(ele2).text()));
            for(var x = 1; x < data2.length; x++){
                if(data2[x][15].includes(field_name[i]) || data2[x][15].includes("通識")){
                    await Course.findOneAndUpdate({course_id: data2[x][0]}, {
                        $push: {general: y}
                    })
                }
            }
        }
        console.log(`A${i} loaded complete`)
    }
    
    await browser.close()

    res.status(200).json({ messages: "message from router", data: null})
})

router.get('/coursedetail', async(req, res) =>{
    const semester = req.query.semester;
    const courseId = req.query.courseId;

    const puppeteer = require('puppeteer');
    const cheerio = require('cheerio');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://nol.ntu.edu.tw/nol/coursesearch/search_result.php?current_sem=${semester}&cstype=4&csname=${courseId}&alltime=yes&allproced=yes&allsel=yes&page_cnt=15&Submit22=%E6%9F%A5%E8%A9%A2`);

    let body = await page.content();
    let $ = await cheerio.load(body);

    const data = await $("table").find('tbody > tr[align="center"] > td > a').toArray().map(ele => $(ele).attr('href')).filter(href => href.includes("course_id"));
    if(data.length === 0){
        res.status(403).json({ messages: "detail not found", data: null });
    }
    const link = "https://nol.ntu.edu.tw/nol/coursesearch/" + data[0];
    console.log(link);
    await page.goto(link);

    let detailBody = await page.content();
    let $$ = await cheerio.load(detailBody);

    const ACCT = ["課程概述", "課程目標", "課程要求", "預期每週課後學習時數", "Office Hours", "參考書目", "指定閱讀"]
    const output = ["", "", "", "", "", "", ""]
    const infor = await $$("body").find('table > tbody > tr > td > table > tbody > tr > td').toArray().map(ele => $$(ele).text());
    for(var i = 0; i <= 6; i++){
        for(var j = 0; j < infor.length; j++){
            if(infor[j].includes(ACCT[i])){
                output[i] = infor[j+1];
            }
        }
    }

    const output2 = [];
    const score = await $$("body").find('table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td').toArray().map(ele => $$(ele).text());
    for(var i = 4; i <= score.length; i = i+4){
        output2.push(
            {
                description: score[i+1],
                percent: score[i+2]
            }
        )
    }
    
    await browser.close();

    res.status(200).json({ messages: "message from router", data:{ ACCT: output, score: output2 } })
})

export default router;
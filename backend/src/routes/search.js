import { Router } from "express"
import Course from "../models/Course"

const router = Router();

router.post('/searchcourses', async(req, res) => {
    const { filter } = req.body;
    const { searchType, searchKey, timeFilter, generalFilter, departFilter, selectedSemester, cstypeFilter } = filter;
    console.log(filter);
    let result;

    if(searchKey === undefined || searchKey === ''){
        result = await Course.find({semester: selectedSemester}).sort({course_id: 1});
    }
    else if( searchType === 'teachername'){
        result = await Course.find({semester: selectedSemester, teacher: searchKey}).sort({course_id: 1});
    }
    else if( searchType === 'coursename'){
        result = await Course.find({semester: selectedSemester, course_name: {$regex: searchKey}}).sort({course_id: 1});
    }
    else if( searchType === 'courseid'){
        result = await Course.find({semester: selectedSemester, course_id: searchKey}).sort({course_id: 1});
    }
    else{
        res.status(403).json({messages: "Error", data: []});
        return;
    }

    if(result.length === 0){
        res.status(200).json({messages: "Not found1", data: []});
        return;
    }

    if(timeFilter !== 'none'){
        const tmFilter = timeFilter.map(e => Number(e));
        result = result.filter((course) => {
            for(var i = 0; i < course.time_for_filter.length; i++){
                if(tmFilter.indexOf(course.time_for_filter[i]) >= 0){
                    return true;
                }
            }
            return false
        })
    }

    if(generalFilter !== 'none'){
        const gnFilter = generalFilter.map(e => Number(e));
        result = result.filter((course) => {
            for(var i = 0; i < course.general.length; i++){
                if(gnFilter.indexOf(course.general[i]) >= 0){
                    return true;
                }
            }
            return false
        })
    }

    if(departFilter !== undefined && departFilter !== 'All'){
        if(departFilter === "臺師大" || departFilter === "臺科大"){
            const tmp = departFilter + "校際課程"
            result = result.filter((course) => {
                if( course.note !== null && course.note.includes(tmp) ){
                    return true;
                }
                return false;
            });
        }
        else{
            result = result.filter((course) => {
                for(var i = 0; i <= course.department.length; i++){
                    if(course.department[i] === departFilter){
                        return true;
                    }
                }
                return false;
            })
        }
    }

    if(result.length === 0){
        res.status(200).json({messages: "Not found2", data: []});
        return;
    }
    res.status(200).json({messages: "Found", data: result});
    return;
})

router.get('/searchcourse', async(req, res) => {
    const { semester, id } = req.query;
    console.log(semester, id);
    const course = await Course.findOne({semester: semester, course_id: id});
    if(!course){
        res.status(404).json({messages: "Not found", data: null});
        return;
    }
    res.status(200).json({messages:"Found", data: course});
})

export default router;
import { Router } from "express"
import Course from "../models/Course"

const router = Router();

router.get('/searchcourses', async(req, res) => {
    const { filter } = req.query;
    const searchType = filter.searchType;
})

router.get('/searchcourse', async(req, res) => {
    const { semester, id } = req.query;
    console.log(semester, id);
    const course = await Course.findOne({semester: semester, course_id: id});
    if(!course){
        res.status(404).json({messages: "Not found", data: null});
    }
    res.status(200).json({messages:"Found", data: course});
})

export default router;
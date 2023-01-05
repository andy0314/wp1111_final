import { Router } from "express";
import Course from "../models/Course";
import UserModel from '../models/user'

const router = Router()

router.post('/signup', async (req, res) => {
    const { name, password } = req.body
    const user = await UserModel.findOne({ name })
    if(user && user.password){
        res.status(200).json({ messages: "AlreadyExist", data: name })
    }
    else if(user){
        user.password = password
        await user.save()
        res.status(200).json({ messages: "NewPassword", data: name })
    }
    else {
        const newUser = new UserModel({
            name: name,
            password: password,
        })
        await newUser.save()
        res.status(200).json({ messages: "SignedUp", data: name })
    }

})
router.post('/login', async (req, res) => {
    const { name } = req.body
    const user = await UserModel.findOne({ name })
    if(!user || !user.password){
        res.status(200).json({ messages: "Doesn'tExist", data: name })
    }
    else {
        res.status(200).json({ messages: "Hash", data: user.password })
    }
})
router.post('/course', async (req, res) => {
    const { name } = req.body
    const user = await UserModel.findOne({ name })
    if(!user){
        console.log("NoUser", name)
        res.status(200).json({ messages: "NoUser", data: name })
    }
    else {
        const popedUser = await user.populate([{ path: 'courses', model: 'course', select: ['course_name', 'teacher', 'time_place', 'time_for_filter', 'course_id', 'semester']}])
        res.status(200).json({ messages: "gotCourses", data: popedUser.courses })
    }
})
router.post("/store", async (req, res) => {
    const { name, course_array } = req.body
    const user = await UserModel.findOne({ name })
    if(!user){
        console.log("NoUser", name)
        res.status(200).json({ messages: "NoUser", data: name })
    }
    else {
        console.log("store/course_array", course_array)
        let nCourse = []
        course_array.map((cors, key) => {
            nCourse.push(cors._id)
        })
        console.log("store/nCourse", nCourse)
        const Nuser = await UserModel.findOneAndUpdate({ name: user.name }, { courses: nCourse }, {
            new: true,
        })
        console.log("Nuser", Nuser)
        const PNuser = await Nuser.populate([{ path: 'courses', model: 'course', select: ['course_name', 'teacher', 'time_place', 'time_for_filter']}])
        res.status(200).json({ messages: "gotCourses", data: PNuser.courses })
    }
})
export default router;
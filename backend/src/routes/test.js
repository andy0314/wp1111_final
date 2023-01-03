import { Router } from "express";
import UserModel from '../models/user'

const router = Router()

router.get('/test', async(req, res) => {
    res.status(200).json({ messages: "message from router" });
})
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
        const popedUser = await user.populate([{ path: 'courses', model: 'course', select: ['course_name', 'teacher', 'time_place', 'time_for_filter']}])
        res.status(200).json({ messages: "gotCouurses", data: popedUser.courses })
    }
})

export default router;
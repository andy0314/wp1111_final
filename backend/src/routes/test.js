import { Router } from "express";

const router = Router()

router.get('/test', async(req, res) => {
    res.status(200).json({ messages: "message from router" });
})

export default router;
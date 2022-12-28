import { Router } from "express";

const router = Router()

router.get('/test', async(req, res) => {
    res.json({ messages: "message from router" });
})

export default router;
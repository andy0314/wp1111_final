import { Router } from "express";
import test from "./test"
import crawler from "./crawler"

const router = Router();

router.use('/test', test);
router.use('/crawler', crawler);

export default router;
import { Router } from "express";
import test from "./test"
import crawler from "./crawler"
import search from "./search"

const router = Router();

router.use('/test', test);
router.use('/crawler', crawler);
router.use('/search', search);

export default router;
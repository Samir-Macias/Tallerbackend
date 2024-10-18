import {Router } from "express";
import allStores from "../controllers/stores/read.js";

const router = Router()

router.get('/all',allStores)

export default router
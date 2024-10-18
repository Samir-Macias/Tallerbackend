import {Router} from "express";
import allProducts from "../controllers/products/read.js";

const router = Router()

router.get('/all',allProducts)

export default router
import {Router} from "express";
import {allProducts, typeProducts, nameProducts} from "../controllers/products/read.js";
import { createPro, createProall } from "../controllers/products/create.js";


const router = Router()

router.get('/all',allProducts)
router.get('/type/:typePro',typeProducts)
router.get('/name/:namePro',nameProducts)
router.post('/create',createPro)
router.post('/createall',createProall)

export default router
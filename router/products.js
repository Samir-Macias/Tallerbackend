import {Router} from "express";
import {allProducts, typeProducts, nameProducts} from "../controllers/products/read.js";

const router = Router()

router.get('/all',allProducts)
router.get('/type/:typePro',typeProducts)
router.get('/name/:namePro',nameProducts)

export default router
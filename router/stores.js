import {Router } from "express";
import {allStores, nameStores, addressStores} from "../controllers/stores/read.js";

const router = Router()

router.get('/all',allStores)
router.get('/name/:nameEst',nameStores)
router.get('/address/:addressEmp',addressStores)

export default router
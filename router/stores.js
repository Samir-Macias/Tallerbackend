import {Router } from "express";
import {allStores, nameStores, addressStores} from "../controllers/stores/read.js";
import { createEst, createEstall } from "../controllers/stores/create.js";

const router = Router()

router.get('/all',allStores)
router.get('/name/:nameEst',nameStores)
router.get('/address/:addressEmp',addressStores)
router.post('/create',createEst)
router.post('/createall',createEstall)

export default router
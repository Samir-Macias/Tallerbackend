import { Router } from "express";
import {allEmployees, nameEmployees, postEmployees } from "../controllers/employees/read.js";
import { createEmp, createEmpall } from "../controllers/employees/create.js";


const router = Router()

router.get('/all',allEmployees)
router.get('/name/:nameEmp',nameEmployees)
router.get('/post/:postEmp',postEmployees)
router.post('/create',createEmp)
router.post('/createall',createEmpall)
export default router
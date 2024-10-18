import { Router } from "express";
import {allEmployees, nameEmployees, postEmployees } from "../controllers/employees/read.js";

const router = Router()

router.get('/all',allEmployees)
router.get('/name/:nameEmp',nameEmployees)
router.get('/post/:postEmp',postEmployees)

export default router
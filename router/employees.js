import { Router } from "express";
import allEmployees from "../controllers/employees/read.js";

const router = Router()

router.get('/all',allEmployees)

export default router
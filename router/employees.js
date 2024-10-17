import { Router } from "express";
import Employee from "../models/Employees.js";

const router = Router()

router.get('/all',
    async (req,res) => {
        try {
            let all = await Employee.find()
            return res.status(200).json({
                response:all
            })
        } catch (error) {
           return response.status(500).json({
            response: error
           }) 
        }

    }
)

export default router
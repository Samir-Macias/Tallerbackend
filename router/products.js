import {Router} from "express";
import Product from "../models/Products.js";

const router = Router()

router.get('/all',
    async (req,res) => {
        try {
            let all = await Product.find()
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
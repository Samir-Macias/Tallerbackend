import { Router } from "express";
import employeesRouter from './employees.js'
import ProductsRouter from './products.js'
import StoresRouter from './stores.js'

const router = Router()

router.use('/stores',StoresRouter)
router.use('/employees', employeesRouter)
router.use('/products',ProductsRouter )

export default router
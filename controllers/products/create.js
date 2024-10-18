import Product from "../../models/Products.js";

let createPro = async (req, res,next) => {

    try {

        let product = req.body
        let productNew = await Product.create(product)
        return res.status(201).json({
            response: productNew
        })

    } catch (error) {
        next(error)
    }

}

let createProall = async (req, res,next) => {

    try {

        let product = req.body
        let productNew = await Product.insertMany(product)
        return res.status(201).json({
            response: productNew
        })

    } catch (error) {
        next(error)
    }

}


export {createPro, createProall}
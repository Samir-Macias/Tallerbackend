import Product from "../../models/Products.js";

let createPro = async (req, res) => {

    try {

        let product = req.body
        let productNew = await Product.create(product)
        return res.status(201).json({
            response: productNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}

let createProall = async (req, res) => {

    try {

        let product = req.body
        let productNew = await Product.insertMany(product)
        return res.status(201).json({
            response: productNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}


export {createPro, createProall}
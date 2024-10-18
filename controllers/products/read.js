import Product from "../../models/Products.js";

let typeProducts =  async (req,res,next) => {
    try {
        let typeQuery = req.params.typePro
        let type = await Product.find({type:typeQuery})
        return res.status(200).json({
            response:type
        })
    } catch (error) {
        next(error)
    }

}

let nameProducts =  async (req,res,next) => {
    try {
        let nameQuery = req.params.namePro
        let name = await Product.find({name:nameQuery})
        return res.status(200).json({
            response:name
        })
    } catch (error) {
        next(error)
    }

}

let allProducts =  async (req,res,next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }

}
 
export {allProducts, nameProducts, typeProducts}
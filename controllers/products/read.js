import Product from "../../models/Products.js";

let typeProducts =  async (req,res) => {
    try {
        let typeQuery = req.params.typePro
        let type = await Product.find({type:typeQuery})
        return res.status(200).json({
            response:type
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

let nameProducts =  async (req,res) => {
    try {
        let nameQuery = req.params.namePro
        let name = await Product.find({name:nameQuery})
        return res.status(200).json({
            response:name
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

let allProducts =  async (req,res) => {
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
 
export {allProducts, nameProducts, typeProducts}
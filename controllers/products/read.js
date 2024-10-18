import Product from "../../models/Products.js";

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
 
export default allProducts
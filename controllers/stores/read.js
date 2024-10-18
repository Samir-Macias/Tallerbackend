import Store from "../../models/Stores.js";

let allStores = async (req,res) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

export default allStores
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

let nameStores = async (req,res) => {
    try {
        let nameQuery = req.params.nameEst
        let name = await Store.find({name: nameQuery})
        return res.status(200).json({
            response:name
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

let addressStores = async (req,res) => {
    try {
        let addressQuery = req.params.addressEst
        let address = await Store.find({address: addressQuery})
        return res.status(200).json({
            response:address
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

export {allStores, addressStores, nameStores} 
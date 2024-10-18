import Store from "../../models/Stores.js";

let allStores = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }

}

let nameStores = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameEst
        let name = await Store.find({ name: nameQuery })
        return res.status(200).json({
            response: name
        })
    } catch (error) {
        next(error)
    }

}

let addressStores = async (req, res, next) => {
    try {
        let addressQuery = req.params.addressEst
        let address = await Store.find({ address: addressQuery })
        return res.status(200).json({
            response: address
        })
    } catch (error) {
        next(error)
    }

}

export { allStores, addressStores, nameStores } 
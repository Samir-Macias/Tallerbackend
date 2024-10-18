import Store from "../../models/Stores.js";

let createEst = async (req, res) => {

    try {
        let store = req.body
        let EstoresNew = await Store.create(store)
        return res.status(201).json({
            response: EstoresNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}

let createEstall = async (req, res) => {

    try {
        let store = req.body
        let EstoresNew = await Store.insertMany(store)
        return res.status(201).json({
            response: EstoresNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}

export {createEst, createEstall}
import Store from "../../models/Stores.js";

let createEst = async (req, res, next) => {

    try {
        let store = req.body
        let EstoresNew = await Store.create(store)
        return res.status(201).json({
            response: EstoresNew
        })

    } catch (error) {
      next(error)
    }

}

let createEstall = async (req, res,next) => {

    try {
        let store = req.body
        let EstoresNew = await Store.insertMany(store)
        return res.status(201).json({
            response: EstoresNew
        })

    } catch (error) {
        next(error)
    }

}

export {createEst, createEstall}
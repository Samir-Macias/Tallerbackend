import Employee from "../../models/Employees.js";


let allEmployees =  async (req,res,next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }

}

let nameEmployees = async (req,res,next) => {
    try {
        let nameQuery = req.params.nameEmp
        let  name= await Employee.find({name:nameQuery})
        return res.status(200).json({
            response:name
        })
    } catch (error) {
        next(error)
    }
}

let postEmployees = async (req,res,next) => {
    try {
        let postQuery = req.params.postEmp
        let  post= await Employee.find({post:postQuery})
        return res.status(200).json({
            response:post
        })
    } catch (error) {
        next(error)
    }
}

export {allEmployees, nameEmployees,postEmployees}
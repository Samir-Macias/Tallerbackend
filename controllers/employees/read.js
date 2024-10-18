import Employee from "../../models/Employees.js";


let allEmployees =  async (req,res) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response:all
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }

}

let nameEmployees = async (req,res) => {
    try {
        let nameQuery = req.params.nameEmp
        let  name= await Employee.find({name:nameQuery})
        return res.status(200).json({
            response:name
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }
}

let postEmployees = async (req,res) => {
    try {
        let postQuery = req.params.postEmp
        let  post= await Employee.find({post:postQuery})
        return res.status(200).json({
            response:post
        })
    } catch (error) {
       return response.status(500).json({
        response: error
       }) 
    }
}

export {allEmployees, nameEmployees,postEmployees}
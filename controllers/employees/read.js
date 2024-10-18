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

export default allEmployees
import Employee from "../../models/Employees.js";

let createEmp = async (req, res) => {

    try {

        let employee = req.body
        let EmployeesNew = await Employee.create(employee)
        return res.status(201).json({
            response: EmployeesNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}

let createEmpall = async (req, res) => {

    try {

        let employee = req.body
        let EmployeesNew = await Employee.insertMany(employee)
        return res.status(201).json({
            response: EmployeesNew
        })

    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }

}


export {createEmp,createEmpall}
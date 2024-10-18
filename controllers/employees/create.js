import Employee from "../../models/Employees.js";

let createEmp = async (req, res,next) => {

    try {

        let employee = req.body
        let EmployeesNew = await Employee.create(employee)
        return res.status(201).json({
            response: EmployeesNew
        })

    } catch (error) {
        next(error)
    }

}

let createEmpall = async (req, res,next) => {

    try {

        let employee = req.body
        let EmployeesNew = await Employee.insertMany(employee)
        return res.status(201).json({
            response: EmployeesNew
        })

    } catch (error) {
        next(error)
    }

}


export {createEmp,createEmpall}
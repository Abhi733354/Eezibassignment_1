const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();
//http://localhost:4000/employee/id
router.get('/:id', async(req, res)=>{
    try {
        const employee_id = req.params.id;
        const response = await Employee.find({id: employee_id});
        res.status(200).json(response);
        }
        catch(err){

            res.status(400).json(err);
        }
})
// 
//http://localhost:4000/employee
 router.post('/', async(req, res)=>{
    try{
        const tempEmployee = new Employee({
            Employee_id:req.body.Employee_id,
            Employee_name: req.body.Employee_name,
            Employee_email:req.body.Employee_email,
            Employee_task:req.body.Employee_task,
            status: req.body.status,
        })
        const response = await tempEmployee.save();
        res.status(200).json(response);

    }
    catch(err){
        res.status(400).json(err);

    }
 })
 router.del('/delete', async(req, res)=>{
    try{
        const tempEmployee = {
            Employee_id:req.body.Employee_id,
            Employee_name: req.body.Employee_name,
            Employee_email:req.body.Employee_email,
            Employee_task:req.body.Employee_task,
            

        }
        const response = await tempEmployee.findOneAnddelete(Employee_id);
        res.status(200).json(response);

    }
    catch(err){
        res.status(400).json(err);

    }
 })
 module.exports = router; 
const mongoose = require('mongoose');
const { DefaultDeserializer } = require('v8');
const EmployeeSchema = mongoose.Schema({
    employee_id:{
        type: String,
        reqiured: true,
        unique: true,
    },
    employee_name:{
        type: String,
        reqiured: true,

    },
    employee_email:{
        type: String,
        reqiured: true,

    },
    employee_task:{
        type: String,
        reqiured: true,

    },
    status: {
        type: Number,
        required: true,
    }
    
})
module.exports = mongoose.model('Employee', EmployeeSchema);
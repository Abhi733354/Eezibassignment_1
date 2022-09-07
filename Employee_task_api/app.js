// const { constants } = require('buffer');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/', (req, res)=>{
    try {
        console.log('server started')
        }
        catch (e){

        }
})
mongoose.connect('mongodb+srv://Eezibassigment1:Eezib@123@cluster0.hwr3wsv.mongodb.net/?retryWrites=true&w=majority')
app.listen(4000);
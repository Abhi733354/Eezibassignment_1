    import React, {useRef, useState} from 'react'
    import axios from 'axios';

    const Employee = () => {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    //   const errorRef = useRef();
    const[employee, setEmployee] = useState([]);
    const [submitStatus, setSubmitStatus] = useState(false);

    const addFn = async () => {
        let tempObj = {};
        tempObj.employee_id = parseInt(Math.random()*100000000);
        tempObj.employee_name = inputRef1.current.value;
        tempObj.employee_email = inputRef2.current.value;
        tempObj.task = inputRef3.current.value;
        const tempId = useParams();
        console.log(tempobj);

        
        if(tempObj.employee_id !== '' && tempObj.employee_name !== '' && tempObj.employee_email !== '' && tempobj.task!=='') {

            try{
                const url = `$http://localhost:4000/employee`;
                const response = await axios.post(url, tempObj);
                console.log(response);
                if(response.status === 201) {
                    setSubmitStatus(true);
                    errorRef.current.textContent = ''
                }
            }
            catch(err) {
                errorRef.current.textContent = 'Error. Plz try again.'
            }
        }
        else {
        errorRef.current.textContent = 'Plz fill all the values.'
        }
    }
    const callApiEmployee = async () => {
        const url = `$http://localhost:4000/employee/id/${tempId.id}`;
        const response = await axios.get(url);
        setEmployee(response.data);
    }
    const datadelete = async () => {
        const url = `$http://localhost:4000/employee/delete/${tempId.id}`;
        const response = await axios.get(url);
        setEmployee(response.data);
    }

    return (
        <>
        <section id="" className="section-bg">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12">
                    <h2>Task Managment</h2>
                    </div>
                </div>

            </div>
        </section>
        <section id="" className="">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Id</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" ref={inputRef1} placeholder="Employee id"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Name</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" ref={inputRef1} placeholder="Employee Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Employee Email</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" ref={inputRef1} placeholder="Employee mail"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Task</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" ref={inputRef1} placeholder="Assign task"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button className="btn btn-warning" onClick={addFn}>Add Employee</button>
                        </div>
                    </div>
                    
                    
                </div>
                
                
            </div>
            
            </div>
        </section>
        <section id="" class="section-bg">
                    <div class="container" data-aos="fade-up">
                        <table className="table table-responsive table-warning" onChange={callApiEmployee }>
                                            
                                            {employee && employee.map((temp) => (
                                                <tr>
                                                    <th>Employee ID</th>
                                                    <td>{temp.employee_id}</td>
                                                    <th>Employee Name</th>
                                                    <td>{temp.employee_name}</td>
                                                    <th>Employee Email</th>
                                                    <td>{temp.employee_email}</td>
                                                    <th>Task</th>
                                                    <td>{task}</td>
                                                    <td><button type='delete' onClick={datadelete}>Delete</button></td>
                                                    <td>{temp.status}</td>
                                                    
                                                </tr>
                                            ))}
                        </table>
                    </div>

    </section>
    </>
    )
    }

    export default Employee;
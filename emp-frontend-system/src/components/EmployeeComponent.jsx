import React, {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'



const EmployeeComponent = () => {
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {ids}  = useParams();
    
    const[errors, setErrors] = useState({
        firstName : '',
        lastName : '',
        email : ''
    }
    )

    const navigator = useNavigate();

    useEffect( () => {
        if(ids){
            getEmployee(ids).then((response) => {
                setId(response.data.id);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch( error => {
                console.error(error);
            })
        }
    },[ids])

    function saveEmployee(e){
        e.preventDefault();

        if(validateForm()){
        const employee = {id,firstName, lastName, email}
        console.log(employee)
        if(ids){
            updateEmployee(ids, employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.error(error);
            })
        }else{

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        }).catch(error => {
            console.error(error);
        })
    }
    }
        
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = ' First Name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = ' Last Name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = ' Email is required';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle(){
        if(ids){
            <h2 className='text-center'>Update Employee</h2>
        }else{
            <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (
    <div className='container' ><br/>
        <div className='row'><br/>
            <div className='card'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form  >
                    <div className='form-group-mb-2'><br/>
                            <label className='form-lable'> Id : </label><br/>
                            <input
                                type='number'
                                placeholder='Enter Employee Id'
                                name='id'
                                value={id}
                                className='form-control'
                                onChange={(e) => setId(e.target.value)}
                            ></input>
                        </div>
                        <div className='form-group-mb-2'><br/>
                            <label className='form-lable'> First Name : </label><br/>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                             {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                        </div>

                        <div className='form-group-mb-2'><br/>
                            <label className='form-lable'> Last Name : </label><br/>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            ></input>
                             {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                        </div>

                        <div className='form-group-mb-2'><br/>
                            <label className='form-lable'> Email : </label><br/>
                            <input
                                type='text'
                                placeholder='Enter Employee Email Id'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                             {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                        </div>
                    <br/>
                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button><br/><br/>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
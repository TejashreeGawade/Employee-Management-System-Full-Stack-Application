import React, {useEffect, useState} from 'react'
import { deleteEmployee, listOfEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    //below is Syntax to use useState Hooks
const [employees , setEmployees] = useState([]);
const navigator = useNavigate(); 

// make restapi call or ajax call use below hook.
useEffect( () => {
    getAllEmployee();
}, [])

function getAllEmployee(){
    listOfEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
})
}

 function addNewEmployee(){
    navigator('/add-employee');
 }
function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
}
function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployee();
    }).catch( error => {
        console.error(error);
    })

}

  return (
    <div className="container p-5 my-5 bg-dark text-white">
        <h1 className="text-center">List of Employees</h1>
        <button type="button" className="btn btn-success btn-lg" onClick={addNewEmployee}>Add Employee</button> <br /><br />
        
        <table className="table table-info table-striped table-hover">
            <thead>
            <tr className="table-info">
                <th> Id </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email </th>
                <th> Action </th>
            </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                    <tr className="table-light" key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={ () => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger' onClick={ () => removeEmployee(employee.id)} style={{marginLeft : '10px'}}>Delete</button>
                        </td>
                    </tr>    
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
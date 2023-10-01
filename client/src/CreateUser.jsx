import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', {
            name:name, 
            email:email, 
            age:age
        })
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-75 bg-white rounded p-3'>
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' 
                        onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' className='form-control' 
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control' 
                        onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser
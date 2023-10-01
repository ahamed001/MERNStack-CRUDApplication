import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    const {id}=useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[])

    const update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/updateUser/'+id, {
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
            <form onSubmit={update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' 
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' className='form-control' 
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control' 
                        value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser
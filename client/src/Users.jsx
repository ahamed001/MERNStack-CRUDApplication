import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-info bg-gradient justify-content-center align-items-center'>
        <div className='w-75 bg-white rounded p-3'>
            <Link to='/createUser' className='btn btn-success'>Add</Link>
            <table className='table'>
                <thead>
                    <tr className='flex'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        users.map((user) => {
                            return<tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/updateUser/${user._id}`} className='btn btn-info m-1'>Update</Link>
                                    <button className='btn btn-danger m-1'
                                        onClick={(e) => handleDelete(user._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users
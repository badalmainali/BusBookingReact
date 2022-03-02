import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loaders from '../components/Loaders';
import Error from '../components/Error';
import Swal from 'sweetalert2'

function AllUsers() {
    //usestate
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    //use effect
    useEffect(async () => {
        try {
            setloading(true)
            const data = (await axios.get("/api/users/getallusers")).data

            setusers(data)
            setloading(false)
        }
        catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)

        }
    }, [])


    //delete the user

    async function deleteUser(_id){
        
        try {
            setloading(true)
            const data=(await axios.delete(`/api/users/delete/${_id}`)).data
            setloading(false)
            Swal.fire('Congrats','User has been deleted','success')
            window.location.href='/admin'
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='row usrrow'>
            <div className='col-md-11'>

                <h5>All Users</h5>

                {loading && (<Loaders />)}

                <table className='table table-bordered bs'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Is Admin</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.length && (users.map(user => {
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                <td><i className='fa fa-edit' ></i></td>
                                <td><i className='fa fa-trash' onClick={()=>{deleteUser(user._id)}}></i></td>
                                
                                
                            </tr>
                        }))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default AllUsers
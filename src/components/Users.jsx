import React, { useEffect, useState } from 'react'
import { userDetailsAPI } from '../services/allAPI'

function Users() {
    const [users, setUsers] = useState([])

    const getalluser = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await userDetailsAPI(reqHeader)
            setUsers(result.data);
        }
    }
    console.log(users);
    useEffect(() => {
        getalluser()
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <h1 className='ms-3  text-center mt-4 mb-3'>Users <span className='text-warning'> List</span></h1>
                <div className="row">

                    <div className="col-md-12">
                        <div className='p-3 w-100'>

                            <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
                                <table className='table table-striped table-bordered shadow rounded'>
                                    <thead className='bg-primary text-white'>
                                        <tr>
                                            <th className="py-3 text-center">S.No</th>
                                            <th className="py-3 text-center">UserName</th>
                                            <th className="py-3 text-center">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {users.length > 0 ?
                                            users.map((item, index) => (
                                                <tr key={index}>
                                                    <td className='text-center'>{index + 1}</td>
                                                    <td className='text-center'>{item.username}</td>
                                                    <td className='text-center'>{item.email}</td>
                                                </tr>
                                            ))
                                            :
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <p className='text-danger'>Nothing to display</p>
                                                </td>
                                            </tr>
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Users

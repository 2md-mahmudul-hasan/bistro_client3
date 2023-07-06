import React from 'react';
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
import {

  useQuery,
} from '@tanstack/react-query'
import { FaTrash, FaUserShield } from 'react-icons/fa';
const Allusers = () => {


  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()
  })

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name}`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleDeleteUser = (user) => {

  }
  return (
    <div>
      <Helmet>
        <title> bistroo-booss || all users</title>
      </Helmet>
      <p> Total users is {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user._id}>
              <th>1</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role === 'admin' ? 'admin' : <button className='btn btn-ghost bg-red-500' onClick={() => handleMakeAdmin(user)}><FaUserShield></FaUserShield></button>}</td>
              <td> <button className='btn btn-ghost bg-red-500' onClick={() => handleDeleteUser(user)}><FaTrash /></button></td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
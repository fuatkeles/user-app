import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// COMPONENTS
import Singleuser from './Singleuser'
import Button from '@mui/material/Button';

// https://randomuser.me/api/?results=5

const UserList = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=1')
    setUsers(response.data.results)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleClick = () =>{
    fetchUsers();
  }

  return (
    <div className='user-list'>
      <h1 className='rndm'>Get Random User</h1>
      <ul>
        {users.map((user, idx) => (
          <li>
            {' '}
            <Singleuser user={user} key={idx} />{' '}
          </li>
        ))}
      </ul>
      <div className="tus">
        <Button variant="contained" onClick={handleClick}>New User</Button>
      </div>
    </div>
    
  )
}

export default UserList
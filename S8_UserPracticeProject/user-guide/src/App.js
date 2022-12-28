import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser'
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

const DUMMY_USERS = [
  {
    username:'geetha',
    age: 38,
    id: 'u1',
  },
  {
    username:'anand',
    age: 42,
    id: 'u2',
  },
  {
    username:'vignesh',
    age: 4,
    id: 'u3',
  },
];

function App() {

  const [ users, setUsers ] = useState(DUMMY_USERS)

  const addUserHandler = (enteredUserDetails) => {
    // setUsers((prevUsers) => {
    //   return [userDetails, ...prevUsers]
    // })
    const userDetails = {
        ...enteredUserDetails,
        id: Math.random().toString()
    }
    //props.onAddUser(userDetails)
    console.log(userDetails)
  }

  const deleteHandlerItem= (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId)
      return updatedUsers
    })
  }
  let content = (
    <p style={{textAlign: 'center'}}>No User found. May be add one</p>
  )

  if (users.length > 0) {
    content = (
      <UserList items={users} onDeleteItem={deleteHandlerItem} />
    )
  }
  return (
    <div >
      <section>
        <AddUser />
        <UserForm onAddUser={addUserHandler}/>
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;

import React, { useState } from 'react'

const UserForm = (props) => {

    const [ username, setUsername ] = useState('')
    const [ age, setAge ] = useState('')

    const nameChangeHandler = (event) => {
         setUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setAge(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        const userDetails = {
            username: username,
            age: age,
            id: Math.random().toString(),
        }
        props.onAddUser(userDetails)
        console.log(userDetails)
    }
    
  return (
    <div >
        <form onSubmit={submitHandler}>
            <div>
            <label>UserName </label>
            <input type='text' 
                    value={username}
                    onChange={nameChangeHandler}
            /> 
            <br />
            <label>Age </label>
            <input type='text' 
                    value={age}
                    onChange={ageChangeHandler}
            />
            </div>
            <div>
                <button type='submit'> Add User </button>
            </div>
        </form>
    </div>
  )
}

export default UserForm

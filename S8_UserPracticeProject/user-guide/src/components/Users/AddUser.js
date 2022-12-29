import React, { useState, useRef } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef(); //Ref are uncontrolled input components
    const ageInputRef = useRef(); //native DOM elements

    // const [ enteredUsername, setEnteredUsername]  = useState('') //controlled by React
    // const [ enteredAge, setEnteredAge]  = useState('')
    const [ error, setError ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
          })
          return;
        }
        if (+enteredAge < 1){ //+enteredAge is a number not a string
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).'
          })
          return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        console.log(enteredUsername, enteredAge)
        nameInputRef.current.value = '' //native DOM Element
        ageInputRef.current.value = ''
        // setEnteredUsername('')
        // setEnteredAge('')
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    // const ageChangeHandler = (event) => {
    //   setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
      setError(null);
    }

  return (
    <Wrapper>
    { error && (
        <ErrorModal 
            title={error.title} 
            message={error.message} 
            onConfirm={errorHandler}
        />)
    }
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' 
          //value={enteredUsername}
          //onChange={usernameChangeHandler}
          ref={nameInputRef}
          />

        <label htmlFor='age'>Age (Years) </label>
        <input id='age' type='number' 
          //value={enteredAge}
          //onChange={ageChangeHandler}
          ref={ageInputRef}
          />

        <Button type='submit'>Add User</Button>
        </form>
    </Card>
    </Wrapper>
  )
}

export default AddUser

import React from 'react'
import UserItem from './UserItem'

const UserList = (props) => {
  return (
    <ul>
      {props.items.map( (user) => {
        <UserItem key={user.id} onDelete={props.onDeleteItem}> `${user.name} ( ${user.age})`</UserItem>
      })}
    </ul>
  )
}

export default UserList

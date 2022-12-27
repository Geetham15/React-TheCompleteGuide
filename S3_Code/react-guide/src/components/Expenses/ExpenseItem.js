import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

const ExpenseItem = (props) =>{
 // const [title, setTitle ] = useState(props.title)
 // console.log('Expense Item evaluated by React') 
  return (
    <li>
    <Card className='expense-item'>
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        {/* <h2>{title}</h2> */}
         <h2>{props.title}</h2> {/*Stateless component or also called presentational or dump component*/}
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </Card>
    </li>
  );
}
export default ExpenseItem;

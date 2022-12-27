import React, { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses=(props)=> {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  //JSX expression stored in a variable
  // moved to ExpenseList.js
  // let expensesContent = <p>No expenses found.</p>
  // if(filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem 
  //     key={expense.id}
  //     title={expense.title}           
  //     amount={expense.amount} 
  //     date={expense.date}
  //   />
  // ))
  // }
  return (
    <div> 
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p>): (
      filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}           
          amount={expense.amount} 
          date={expense.date}
        />
      ))
      )} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
    </div>
  );
}
export default Expenses;

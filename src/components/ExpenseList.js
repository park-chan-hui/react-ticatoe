import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
    
    return (
      <>
        <ul className='list'>
          {/* Expense Item */}
          {expenses.map(expense=> {
            return (
              <ExpenseItem 
              key={expense.id}
              expense={expense} 
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              />
            )
          })}
        </ul>
        {expenses.length > 0 &&(
        <button className='btn' onClick={clearItems}>
          목록 지우기
          <MdDelete className='btn-icon'/>
        </button>

        )}
      </>
    )
}

export default ExpenseList
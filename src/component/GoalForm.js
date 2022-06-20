import React from 'react'
import Form from './GoalFormHandler'

const GoalForm = (props) => {
    const dataHandler = (item) => {
        const data = {
            id: Math.random().toString(),
            ...item
        }
        props.data(data)
    }

  return (
   <Form 
    data={dataHandler}
    goal={props.item}
   />

  )
}

export default GoalForm
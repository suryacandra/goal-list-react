import React from 'react'
import Item from './GoalItem'

const GoalList = (props) => {


  const list = 
  props.data.map(item => 
    <Item 
        key={item.id} 
        title={item.title}
        desc={item.desc}
        delete={() => props.delete(item.id)}
        update={props.update}
        id={item.id}
    />
)

  return (
    <div>
        {props.data.length <= 0 ? 
        
        <div className="text-center text-xl bg-slate-500 p-5 m-5">No goal yet. Please add some...</div>
         : 
        <div className="w-full md:mx-auto bg-slate-600 p-2 mt-5">
        {list}
        </div>
        }
    </div>
  )
}

export default GoalList
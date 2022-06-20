import React, { useState, useEffect } from 'react'
import GoalList from './component/GoalList'
import GoalForm from './component/GoalForm'


const App = () => {
  const [goal, setGoal] = useState(() => JSON.parse(localStorage.getItem('list')) || [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(goal))
  }, [goal])
  const [search, setSearch] = useState('')

  const searchHandler = (e) => {
    setSearch(e.target.value)
    setGoal(item => {
      const newArray = []
      for(let i = 0; i < item.length; i++) {
        const oldArray = item[i]
        if(item[i].title.match(search)){
          newArray.unshift({...oldArray})
        }else if(item.filter(item => item.title !== search)) {
          newArray.push(oldArray)
        }
      }
      return newArray
    })
  }

  const dataHandler = (props) => {
    setGoal(item => 
      [props,
      ...item]
      
      )
  }

  const delet = (id) => {
    setGoal(item => item.filter(item => item.id !== id))
  }


  const updet = (data, id) => {
    setGoal(item => {
      const newIndex = []
      for(let i = 0; i < item.length; i++){
         const oldIndex = item[i]
         if(item[i].id === id){
          newIndex.unshift({...oldIndex, title: data.title, desc: data.desc}) 
         } else {
          newIndex.push(oldIndex)
         }
      }
      return newIndex
    })
  }


  return (
    <div className="">
      <div className="p-5 bg-slate-600 md:w-full">
        <h1 className="font-mono font-bold text-white tracking-widest text-4xl text-center">Goal List</h1>
      </div>
      <div className="m-3 bg-red-300 p-5 border-2 border-black rounded-lg md:w-1/2 md:mx-auto">
        <p className="text-center text-black">Click goal title to see more content
        </p>
      </div>
      <div className="m-3 mt-5 relative rounded-lg md:w-1/2 md:mx-auto">
        <GoalForm data={dataHandler} item={goal} />
        <div className="w-full bg-slate-600 p-2 mt-5 md:scale-125">
          <div className="flex justify-between">
            <span className="text-white">Search goal</span>
            <input
            className="px-2" 
            type="text" 
            value={search}
            onChange={searchHandler}
            placeholder="Search"
            />
          </div>
        </div>
        <GoalList
          data={goal} delete={delet} update={updet}
        />
      </div>
    </div>
  )
}

export default App;

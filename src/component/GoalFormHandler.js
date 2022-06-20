import React, { useState } from 'react'

const GoalFormHandler = (props) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [alert, setAlert] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if(title.length === 0) {
            setAlert(true)
        }else if(desc.length === 0) {
            setAlert(true)
        }
        else{
        const data = {
            title: title,
            desc: desc,
        }
        props.data(data)
        }
        setTitle('')
        setDesc('')
    }

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const descHandler = (e) => {
        setDesc(e.target.value)
    }

    const alertHandler = () => {
        setAlert(false)
    }


  return (
    <div>
        <div>
        <form onSubmit={submitHandler} className="bg-white p-5 rounded-lg shadow-lg">
            <fieldset className="border-2 border-black p-2">
                <legend>Title</legend>
                <input 
                type="text" 
                placeholder="Enter something...." 
                className={"w-full p-2"}
                value={title}
                onChange={titleHandler}
                />
            </fieldset>
            <fieldset className="border-2 border-black p-2">
                <legend>Description</legend>
                <textarea 
                className="w-full h-[200px] p-2" 
                placeholder="Enter something..."
                value={desc}
                onChange={descHandler}
                ></textarea>
            </fieldset>
            <button className={`${alert ? 'bg-red-300' : 'bg-green-300'} p-3 w-full mt-4 rounded-lg active:scale-75 transition-transform duration-300`}>Submit</button>
        </form>

       {alert && <div className="absolute m-3 p-5 bg-slate-300 w-1/2 rounded-lg top-1/4 border-2 border-black left-[110px] flex flex-col gap-2">
            <span>Please enter valid value to the input</span>
            <button className="bg-green-300 p-2 rounded-lg border-2 border-black active:scale-75 transition-transform duration-300"
            onClick={alertHandler}
            >
                Got it
            </button>
        </div>}
    </div>
    </div>
  )
}

export default GoalFormHandler
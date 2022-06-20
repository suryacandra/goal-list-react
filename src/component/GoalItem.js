import React, { useState, useEffect } from 'react'

const GoalItem = (props) => {
    const [on, setOn] = useState(false)
    const [up, setUp] = useState(false)
    const [see, setSee] = useState(false)
    const [a, setA] = useState(props.title)
    const [b, setB] = useState(props.desc)
    // const [update, setUpdate] = useState(false)

    const clickHandler = () => {
        setOn(item => !item)
    }

    const aHandler = (e) => {
        setA(e.target.value)
    }

    const seeHandler = () => {
        setSee(item => !item)
        setOn(false)
    }

    const bHandler = (e) => {
        setB(e.target.value)
    }

    const updateHandler = () => {
        const data = {
            title: a,
            desc: b
        }
        props.update(data, props.id)
    }

    const onHandler = () => {
        setUp(item => !item)
    }

    useEffect(() => {
        updateHandler()
    },[a, b])

    console.log('a')
    // const updateHandler = () => {
    //     setUpdate(true)
    //     props.update()
    // }

  return (
    <div>
        <div className="w-full p-2 rounded-lg grid gap-2">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="bg-white w-full text-center p-2 gap-2 md:p-10 active:bg-green-300 active:scale-75 transition-transform duration-300" onClick={seeHandler}>
                   {up ? <input value={a}  className="w-ful border-2 border-black" onChange={aHandler}></input> :
                    <span className="uppercase font-mono font-bold tracking-widest md:text-2xl">{a}</span>}
                </div>
                {on && <div className="flex flex-col w-full gap-2">
                    <div className="bg-white m-2 p-5">
                   {up ? <textarea className="w-full h-[300px] border-2 border-black" value={b} onChange={bHandler}></textarea> : <p className="w-full break-all">{b}</p> }
                </div>
                <button className="bg-green-300 p-1 px-5 border-2 border-black text-sm active:scale-75 transition-transform duration-300" onClick={onHandler}>Update</button>  
                </div>
                
                }
            </div>
            {see && 
            <div className="grid gap-2">
                <button className="bg-red-300 p-1 px-5 border-2 border-black text-sm active:scale-75 transition-transform duration-300" onClick={props.delete}>Delete</button>  
                    <button className={`${on ? 'bg-slate-300' : 'bg-green-300'} p-1 px-5 border-2 border-black text-sm active:scale-75 transition-transform duration-300`} onClick={clickHandler}>{on ? 'Hide' : 'See more'}</button>
            </div> }
            
        </div>
    </div>
  )
}

export default GoalItem
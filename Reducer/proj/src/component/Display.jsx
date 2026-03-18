import React, { useContext } from 'react'
import DisplayAll from './DisplayAll'
import { ToDoItemsContext } from '../StoreCode'


const Display = () => {

  const {todoItems}=useContext(ToDoItemsContext)
  
  

  return (<>
 {todoItems?.map((l,i)=>{
  return (
    <DisplayAll key={i} i={i} todoName={l.name} todoDate={l.date}></DisplayAll>
  )
  

 })}
   
  </>
  
  )
}

export default Display

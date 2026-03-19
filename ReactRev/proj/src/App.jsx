import { useReducer, useState } from 'react'
import './App.css'
import Show from './component/Show'
import Display from './component/Display'
import Container from './component/Container'
import { ToDoItemsContext } from './StoreCode'

 const todoItemReducer=(currentTodoItems,action)=>{
  let newTodoItems=currentTodoItems
  if(action.type==="New_Item"){ newTodoItems=[
      ...currentTodoItems,{
        name:action.payload.itemName,date:action.payload.itemDate
      }
    ]
  }
  else if(action.type==="Delete_Item"){
    newTodoItems=currentTodoItems.filter((item)=>item.name!==action.payload.itemName)
    return newTodoItems
  }
  return []
 }
function App() {
//   const[todoItems,setDo]=useState([
// ])
const [todoItems,dispatchTodoItems]=useReducer(todoItemReducer,[])

const addNewItem=(itemName,itemDate)=>{
  const newItem={
    type:"New_Item",
    payload:{
      itemName,
      itemDate
    }
  }
dispatchTodoItems(newItem)
}
const deleteItem=(todoItemsName)=>{
const newT=todoItems.filter(a=> a.name!==todoItemsName)
setDo(newT)

const deleteItemAction={
    type:"Delete_Item",
    payload:{
      itemName:todoItemsName
    }
  }
dispatchTodoItems(deleteItemAction)
}

  return (
    <>
<ToDoItemsContext.Provider value={{todoItems,
  addNewItem,
  deleteItem,
}}>
      <Container>
        <Show  />
        <Display></Display>
      </Container>

 </ToDoItemsContext.Provider>
    </>
  )
}

export default App
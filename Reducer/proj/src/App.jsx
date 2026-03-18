import { useState } from 'react'
import './App.css'
import Show from './component/Show'
import Display from './component/Display'
import Container from './component/Container'
import { ToDoItemsContext } from './StoreCode'

function App() {
  const[todoItems,setDo]=useState([
])
const addNewItem=(itemName,itemDate)=>{
  setDo([...todoItems,{name:itemName,date:itemDate}])

}
const deleteItem=(todoItemsName)=>{
const newT=todoItems.filter(a=> a.name!==todoItemsName)
setDo(newT)
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
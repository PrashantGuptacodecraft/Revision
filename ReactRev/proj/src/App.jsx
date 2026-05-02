import './App.css'
import Show from './component/Show'
import Display from './component/Display'
import Container from './component/Container'
import TodoItemsContextProvider from './StoreCode'

//  const todoItemReducer=(currentTodoItems,action)=>{
//   let newTodoItems=currentTodoItems
//   if(action.type==="New_Item"){ newTodoItems=[
//       ...currentTodoItems,{
//         name:action.payload.itemName,date:action.payload.itemDate
//       }
//     ]
//   }
//   else if(action.type==="Delete_Item"){
//     newTodoItems=currentTodoItems.filter((item)=>item.name!==action.payload.itemName)
//     return newTodoItems
//   }
//   return newTodoItems
//  }
function App() {
//   const[todoItems,setDo]=useState([
// ])

  return (
    <>
    <TodoItemsContextProvider>
       <Container>
        <Show  />
        <Display></Display>
      </Container>
    </TodoItemsContextProvider>
    
{/* <ToDoItemsContext.Provider value={{todoItems,
  addNewItem,
  deleteItem,
}}>
      <Container>
        <Show  />
        <Display></Display>
      </Container>

 </ToDoItemsContext.Provider> */}
    </>
  )
}

export default App
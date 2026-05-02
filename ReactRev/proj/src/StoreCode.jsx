import { createContext, useReducer } from "react";


export const ToDoItemsContext=createContext({todoItems:[],
  addNewItem:()=>{},
  deleteItem:()=>{},
})




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
  return newTodoItems
 }

const TodoItemsContextProvider=({children})=>{

  const [todoItems,dispatchTodoItems]=useReducer(todoItemReducer,[])

const addNewItem=(itemName,itemDate)=>{
  // console.log("hii")
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

const deleteItemAction={
    type:"Delete_Item",
    payload:{
      itemName:todoItemsName
    }
  }
dispatchTodoItems(deleteItemAction)
}
return <ToDoItemsContext.Provider value={{todoItems,
  addNewItem,
  deleteItem,
}}>
     {children}

 </ToDoItemsContext.Provider>

}
export default TodoItemsContextProvider
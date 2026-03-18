import React, { useContext } from 'react'
import { ToDoItemsContext } from '../StoreCode'

const DisplayAll = ({i,todoDate,todoName}) => {
  const {deleteItem}=useContext(ToDoItemsContext)
  return (
    <div className="container ">

        <div key={i} className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItem(todoName)} >Delete</button></div>
        </div>
        </div>
  )
}

export default DisplayAll

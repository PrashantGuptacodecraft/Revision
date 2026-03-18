import React, { useContext, useState } from 'react'
import { ToDoItemsContext } from '../StoreCode'

const Show = () => {

  const {addNewItem}=useContext(ToDoItemsContext)
    // const deleteItem=ContexObj.deleteItem
  const [n, setN] = useState("")
  const [d, setD] = useState("")
  
  const changeN = (e) => {
    setN(e.target.value)
  }

  const changeD = (e) => {
    setD(e.target.value)
  }

  const handle = () => {
 addNewItem(n, d)
    setD("")
    setN("")
  }

  

  return (
    <>
      <input
        type="text"
        value={n}
        onChange={changeN}
        placeholder="Write here"
      />

      <input
        type="date"
        value={d}
        onChange={changeD}
      />

      <div className="container">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={handle}
        >
          Add
        </button>
      </div>
    </>
  )
}

export default Show
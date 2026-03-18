import React from 'react'

const Container = ({children}) => {
  return (
    <div style={{border:"2px solid black"}}>
      {children}
    </div>
  )
}

export default Container

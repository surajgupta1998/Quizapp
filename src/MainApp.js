import React from 'react'
import App from './App'

function MainApp() {
  
  return (
    <div style={{display:'flex',justifyContent: 'space-around',flexWrap:'wrap'}}>
        <App title="Math"/>  
        <App title="General"/>
    </div>
  )
}

export default MainApp
import React from 'react'
import { Questions } from "./helpers/Question";
import { Questions2 } from './helpers/Question2';
// import { dataContext } from './helpers/Contexts';
// import { dataContext1 } from './helpers/Contexts';
import App from './App'

function MainApp() {
  
  return (
    <div style={{display:'flex',justifyContent: 'space-around',flexWrap:'wrap'}}>
    
        <App Questions={Questions} title="Math "/>  
    
    
        <App Questions={Questions2} title="General"/>
    
    </div>
  )
}

export default MainApp
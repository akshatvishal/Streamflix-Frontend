import React from 'react'
import './Mylist.css'
import { useNavigate } from 'react-router-dom'
function Mylist() {
    const navigate=useNavigate();
  return (
    <div className='main-box'>
       <div className="header">
          <button className="home" onClick={()=>navigate('/Home')}>HOME</button>
          <h1 className='word'>My WatchList</h1>
       </div>
    </div>
  )
}

export default Mylist

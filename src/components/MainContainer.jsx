import React, { useState } from 'react'
import './MyStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'

function MainContainer() {
    const [conversations, setconversations] = useState([
        {
            name:"Test#1",
            lastMessage:"Last Message #1",
            timeStamp:"today"
        },
        {
            name:"Test#2",
            lastMessage:"Last Message #2",
            timeStamp:"today"
        },
        {
            name:"Test#3",
            lastMessage:"Last Message #3",
            timeStamp:"today"
        }
    ])
  return (
    <div className='main-container'>
        <Sidebar props={conversations}/>
        <Welcome/>
        {/* <ChatArea props={conversations[0]}/> */}
    </div>
  )
}

export default MainContainer
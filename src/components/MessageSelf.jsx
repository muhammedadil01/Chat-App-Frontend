import React from 'react'

function MessageSelf() {
    var props2={name:'otherUser',message:'This is Sample Message'}
  return (
    <div className='self-message-container'>
       <div className='messageBox'>
          <p style={{margin:'0px'}}>{props2.message}</p>
          <p className='self-timeStamp'>12:00</p>
       </div>
    </div>
  )
}

export default MessageSelf
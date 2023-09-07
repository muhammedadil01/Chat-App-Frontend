import React, { useState } from 'react'
import './MyStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()

    const [conversatoindata, setconversatoindata] = useState([
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
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
            <IconButton>
              <AccountCircleIcon/>
            </IconButton>   
            </div>
            <div>
             <IconButton onClick={()=>{navigate('users')}}>
             <PersonAddIcon/>
             </IconButton> 
             <IconButton onClick={()=>{navigate('groups')}}>
             <GroupAddIcon/>
             </IconButton>
             <IconButton onClick={()=>{navigate('create-groups')}}>
             <AddCircleIcon/>
             </IconButton>
             <IconButton>
             <NightlightIcon/>
             </IconButton>
            </div>
        </div>
        <div className='sb-search'>
           <IconButton>
           <SearchIcon/>
           </IconButton>
            <input placeholder='search' className='search-box'/>
        </div>
        <div className='sb-conversation'>
            { 
                conversatoindata.map((conversation)=>{
                 return(
                  <ConversationsItem props={conversation} key={conversation.name}  />
                 )

                })
            }
        </div>
    </div>
  )
}

export default Sidebar
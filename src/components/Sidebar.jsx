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
import ChatArea from './ChatArea';

function Sidebar({props}) {
    const [conversatoindata, setconversatoindata] = useState(props)
    console.log(conversatoindata);
   
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
            <IconButton>
              <AccountCircleIcon/>
            </IconButton>   
            </div>
            <div>
             <IconButton>
             <PersonAddIcon/>
             </IconButton> 
             <IconButton>
             <GroupAddIcon/>
             </IconButton>
             <IconButton>
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
             
                    return <ConversationsItem props={conversation} key={conversation.name}/>
        
                   
                })
            }
        </div>
    </div>
  )
}

export default Sidebar
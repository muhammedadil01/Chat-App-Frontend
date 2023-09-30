import React, { useState } from 'react'
import './MyStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/SliceTheme';

function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const lightTheme = useSelector((state)=>state.themeKey)
    
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
        <div className={'sb-header' + (lightTheme ? '' : ' dark')}>
            <div>
            <IconButton>
              <AccountCircleIcon className={'icon' + (lightTheme ? '' : ' dark')}/>
            </IconButton>   
            </div>
            <div>
             <IconButton onClick={()=>{navigate('users')}}>
             <PersonAddIcon className={'icon' + (lightTheme ? '' : ' dark')}/>
             </IconButton> 
             <IconButton onClick={()=>{navigate('groups')}}>
             <GroupAddIcon className={'icon' + (lightTheme ? '' : ' dark')}/>
             </IconButton>
             <IconButton onClick={()=>{navigate('create-groups')}}>
             <AddCircleIcon className={'icon' + (lightTheme ? '' : ' dark')}/>
             </IconButton>
             <IconButton onClick={()=>{dispatch(toggleTheme())}}
             className={'icon' + (lightTheme ? '' : ' dark')}
             >
              { lightTheme && <NightlightIcon/> }
              { !lightTheme && <LightModeIcon/>}
             </IconButton>
            </div>
        </div>
        <div className={'sb-search' + (lightTheme ? '' : ' dark')}>
           <IconButton>
           <SearchIcon/>
           </IconButton>
            <input placeholder='search' className={'search-box' + (lightTheme ? '' : ' dark')}/>
        </div>
        <div className={'sb-conversation' + (lightTheme ? '' : ' dark')}>
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
import React from 'react'
import logo from '../Images/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {AnimatePresence, motion} from 'framer-motion'

function Users_Groups() {
  return (
    <AnimatePresence>
    <motion.div
    initial={{opacity:0, scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
      ease : "anticipate",
      duration : "0.3"
    }} 
    className='list-container'>
      <div className='ug-header'>
        <img src={logo} alt="logo" style={{height:'2rem',width:'2rem'}}/>
        <p className='ug-title'>Online Users</p>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>
      <div className='ug-list'>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
        <div className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Users_Groups

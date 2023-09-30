import React from 'react'
import logo from '../Images/live-chat.png'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion'

function Groups() {
  const lightTheme = useSelector((state)=>state.themeKey)
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
      <div className={'ug-header' + (lightTheme ? '' : ' dark')}>
        <img src={logo} alt="logo" style={{height:'2rem',width:'2rem'}}/>
        <p className='ug-title'>Available Groups</p>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>
      <div className='ug-list'>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
        <motion.div whileHover={{scale:1.01}} whileTap={{scale:0.98}} className='list-item'>
         <p className='con-icon'>T</p>
         <p className='con-title'>Test User</p>
        </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Groups
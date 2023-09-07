
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import Users_Groups from './components/Users_Groups';
import CreateGroups from './components/CreateGroups';
import Groups from './components/Groups';
import './App.css'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cont' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='users' element={<Users_Groups />} />
          <Route path='create-groups' element={<CreateGroups />} />
          <Route path='groups' element={<Groups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

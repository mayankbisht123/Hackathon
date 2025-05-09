import React from 'react';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import ChatState from './context/ChatState';
import './App.css'

function App() {
  return (
    <div className='app'>
    <ChatState>
    <Home/>
    </ChatState>
    </div>
  )
}

export default App

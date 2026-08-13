import { useState } from 'react';
import { Sidepanel } from './components/Sidepanel.jsx'
import { Header } from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="appShell">
      <Sidepanel />

      <div className="contentArea">
        <Header />
        <main className="mainContent">
        </main>
      </div>
    </div>
  )
}

export default App

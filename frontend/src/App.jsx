import { useState } from 'react';
import { Sidepanel } from './components/Sidepanel.jsx'
import { Header } from './components/Header.jsx'
import { Filter } from './components/Filter.jsx';
import { Activity } from './components/Activity.jsx';
import './App.css'

function App() {
  return (
    <div className="appShell">
      <Sidepanel />
        <main className="mainContent">
        <Header />
        <Filter/>
        <div className="activitiesContainer">
          <Activity name="Corrida Matinal" user="João Silva" distance="5 Km" duration="30 min" calories="250" likes={120} comments={5}/>
        </div>
        </main>
      </div>
  )
}

export default App

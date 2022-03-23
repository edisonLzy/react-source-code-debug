import React, { useState } from 'react'
import State from './components/State'
import LanesDemo from './components/LanesDemo'
import AppSibling from './components/AppSibling'
import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities'
import SchedulerTask from './components/SchedulerTask'
import Concurrent from './components/ConcurrentInput'
import Diff from './components/Diff'
import PropsDiff from './components/PropsDiff'
import Hooks from './components/Hooks'
import EventDemo from './components/EventDemo'
import ContextDemo from './components/Context'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h1
        key={count}
        onClick={() => {
          setCount(v => v + 1)
        }}
      >
        {count}
      </h1>
      <p>我是第一段话</p>
      <p>我是第二段话</p>
    </div>
  )
}

export default App

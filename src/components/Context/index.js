import React from 'react'
import ThemeParent from './ThemeContext/parent'
import LanguageParent from './LanguageContext/parent'
import './index.css'

const ContextDemo = () => {
  return <div className={'context-demo'}>
    <ThemeParent/>
  </div>
}
export default ContextDemo

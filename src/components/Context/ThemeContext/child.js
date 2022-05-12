import React, { useContext } from 'react'
import ThemeContext from '../context/theme'
const Child = () => {
  const themeColor = useContext(ThemeContext)
  return <p className={'theme-context-child'} style={{ background: themeColor }}>
    Child
  </p>
}
const ConsumerChild = ({ themeColor }) => {
  return <p className={'theme-context-child'} style={{ background: themeColor }}>
    Child
  </p>
}
const Nothing_Change = ()=>{
  console.log('expensive render');
  return <Child/>
}

export default Nothing_Change

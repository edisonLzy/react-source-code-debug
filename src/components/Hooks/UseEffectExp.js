import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'

const UseEffectExp = () => {
  const [ text, setText ] = useState(0)
  const cb = useCallback(()=>{},[])
  const memo = useMemo(()=>{
      return 1
  },[])
  const ref = useRef()
    useEffect(() => {
        console.log('effect1')
        return () => {
            console.log('destory1');
        }
    }, [text])
    useLayoutEffect(() => {
        console.log('effect2')
        return () => {
            console.log('destory2');
        }
    }, [])
    return <div>
        <button onClick={() => setText(text + 1)}>{text}</button>
        useEffect
    </div>
}

export default UseEffectExp

import React, { useState, useEffect } from 'react'

function Comp() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count+1)
        }, 2000)
    }, [count]);
    return <h1>{count}</h1>
}
export default function MemoryLink() {
    const [show, setShow] = useState(false);
    return <>
        <button onClick={()=>{
            setShow(v=>!v);
        }}>toggled</button>
        {show && <Comp />}
    </>
}
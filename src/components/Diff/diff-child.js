import React, { useState } from 'react'
function Input({ children }) {
    const [num, updateNum] = useState(0);
    console.log('Input','-----');
    return (
        <>
            <input value={num} onChange={(e) => {
                debugger
                updateNum(+e.target.value)
            }} />
            <p>num is {num}</p>
            {children}
        </>
    );
}

function Expensive() {
    console.log('expensive render');
    return <h1>
        <span> expensive </span>
    </h1>
}
export default function Diff() {
    console.log('Diff','-----');
    return <Input>
            <Expensive />
    </Input>
}
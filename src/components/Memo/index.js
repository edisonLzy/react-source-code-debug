import React,{ useMemo, useState } from 'react';

const CompA = React.memo(({ outerTrigger })=>{
    console.log('render');
    return <button onClick={outerTrigger}>
        Click
    </button>
},(pre,old)=>{
    console.log(pre,old);
    return true
})

export default function App(){
    const [count, setCount] = useState(0);
    const handleClick = useMemo(()=>()=>{
        console.log('handle click');
    } ,[])
    return <>
    <CompA outerTrigger={handleClick}/>
    <button onClick={()=>setCount(v=>v+1)}>
        {count}
    </button>
    </>
}
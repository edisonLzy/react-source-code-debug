import React,{ useMemo, useState, useRef ,useEffect} from 'react';

// const CompA = React.memo(({ outerTrigger })=>{
//     console.log('render');
//     return <button onClick={outerTrigger}>
//         Click
//     </button>
// },(pre,old)=>{
//     console.log(pre,old);
//     return true
// })

function memo(Comp,compare) {
    function MemoComp (props){
        const last_props = useRef();
        const last_el = useRef();
        const el = useMemo(()=>{
            const shouldMemo = compare(last_props.current,props);
            if(shouldMemo && last_el.current){
                return last_el.current
            }
            return <Comp {...props}/>

        },[props])
        useEffect(()=>{
            last_props.current = props;
            last_el.current = el
        },[el, props]);
        return el
    }
    MemoComp.displayName = Comp.displayName || Comp.name;
    return MemoComp
}

const CompA = memo(({ outerTrigger })=>{
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
    <CompA outerTrigger={handleClick} count={count}/>
    <button onClick={()=>setCount(v=>v+1)}>
        {count}
    </button>
    </>
}
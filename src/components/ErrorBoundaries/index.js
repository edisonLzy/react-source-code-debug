import React, { Component, useEffect } from 'react'
class Comp extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    componentDidCatch(e) {
        console.log(e,'run');
    }
    render() {
        return this.state.hasError ? 'something went wrong' : this.props.children
    }
}
function ErrorComp() {
    // throw new Error('error happen here')
    useEffect(()=>{
        throw new Error('error happen here')
    },[])
    return <div>
    </div>
}
function A({ children }) {
    
    return children
}
export default function ErrorBoundaries() {
    return <Comp>
        <A>
            <ErrorComp />
        </A>
    </Comp>
}
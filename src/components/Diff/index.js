import React, { useState } from 'react'


export default function Diff() {
    const [list, setList] = useState([{
        label: '🍎',
        key: 'apple'
    },
    {
        label: '🍇',
        key: 'grape'
    },
    {
        label: '🍌',
        key: 'banana'
    }
    ]);
    return <div>
        <ul>
            {list.map(it => {
                return <li key={it.key}>
                    <span>{it.label}</span>
                </li>
            })}
        </ul>

        <button onClick={() => {
            setList(v => {
                return [...v].reverse()
            })
        }}>shuffle</button>
    </div>
}

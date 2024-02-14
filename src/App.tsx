import React from 'react'
import './App.css'
import Array from './components/Array'
import { useArray } from './hooks/useArray'

export default function App() {
    const [n, setN] = React.useState(20)
    const array = useArray(n)

    return (
        <div className="App">
            <Array array={array} />

            <div id='config' className='horizontal'>
                <div id='size-select' className='horizontal'>
                    <p id='n'>N = {n}</p>
                    <input
                        type='range' min={10} max={200} value={n}   // TODO - make max proportional to window width
                        onChange={(e) => setN(parseInt(e.target.value))}
                    />
                </div>

                <button onClick={() => array.shuffle()}>Shuffle</button>
                <button>Start</button>
            </div>
        </div>
    )
}

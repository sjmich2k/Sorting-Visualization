import React from 'react'
import Array from './components/Array'
import useArray from './hooks/useArray'
import './App.css'

import selectionSort from './sorts/selection'
import quickSort from './sorts/quick'

export interface Array {
    size: number,
    readonly values: number[],
    swap: (i: number, j: number) => Promise<void>
}

export default function App() {
    const [n, setN] = React.useState(100)
    const [sort, setSort] = React.useState('selection')

    const array = useArray(n, 50)
    const sortArray = { size: array.size, values: array.values, swap: array.swap }

    const onStart = () => {
        switch (sort) {
            case 'selection':
                selectionSort(sortArray)
                break
            case 'quick':
                quickSort(sortArray)
                break
        }
    }

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
                <button onClick={onStart}>Start</button>

                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value='selection'>Selection Sort</option>
                    <option value='quick'>Quick Sort</option>
                </select>
            </div>
        </div>
    )
}

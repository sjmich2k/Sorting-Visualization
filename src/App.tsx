import React from 'react'
import Array from './components/Array'
import useArray from './hooks/useArray'
import './App.css'

import selectionSort from './sorts/selection'
import insertionSort from './sorts/insertion'
import bubbleSort from './sorts/bubble'
import quickSort from './sorts/quick'
import bogoSort from './sorts/bogo'
import yourSort from './sorts/your-sort'


export interface Array {
    size: number,
    readonly values: number[],
    swap: (i: number, j: number) => Promise<void>
}

export default function App() {
    const [n, setN] = React.useState(100)
    const [sort, setSort] = React.useState('selection')

    const array = useArray(n, 5)
    const sortArray = { size: array.size, values: array.values, swap: array.swap }

    const onStart = () => {
        switch (sort) {
            case 'selection':
                selectionSort(sortArray)
                break
            case 'insertion':
                insertionSort(sortArray)
                break
            case 'bubble':
                bubbleSort(sortArray)
                break
            case 'quick':
                quickSort(sortArray)
                break
            case 'bogo':
                bogoSort(sortArray)
                break
            case 'your-sort':
                yourSort(sortArray)
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
                    <option value='insertion'>Insertion Sort</option>
                    <option value='bubble'>Bubble Sort</option>
                    <option value='quick'>Quick Sort</option>
                    <option value='bogo'>Bogo Sort</option>
                    <option value='your-sort'>Your Sort</option>
                </select>
            </div>
        </div>
    )
}

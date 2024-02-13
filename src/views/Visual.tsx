import React from 'react'
import './_views.css'
import Window from '../components/Window'

export type Entry = {
    value: number
}

interface WindowDimensions {
    width: number
    height: number
}

export default function Visual() {
    const windowRef = React.useRef<HTMLDivElement>(null)

    const [n, setN] = React.useState(20)
    const [array, setArray] = React.useState<number[]>([])
    const [dimensions, setDimensions] = React.useState<WindowDimensions>({ width: 0, height: 0 })


    // Get window dimensions
    React.useEffect(() => {
        if (windowRef.current) {
            const { width, height } = windowRef.current.getBoundingClientRect()
            console.log(width, height)
            setDimensions({ width, height })
        }
    }, [windowRef])

    // Init array of size n
    React.useEffect(() => {
        const arr: number[] = []
        for (let i = 1; i <= n; i++) {
            arr.push(i)
        }
        setArray(arr)
    }, [n])


    // Shuffle array
    const shuffle = () => {
        const arr = array.slice()
        // Fisher-Yates shuffle
        for (let i = 0; i < n; i++) {
            const j = Math.floor(Math.random() * n)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        setArray(arr)
    }

    return (
        <div className='container'>
            <div className='window' ref={windowRef}>
                { array.map((value, index) => (
                    <div
                        key={index}
                        className='bar'
                        style={{
                            backgroundColor: 'black',
                            height: `${value * (dimensions.height / (n + 1))}px`,
                            width: `${dimensions.width / n}px`,
                            paddingLeft: '2px',
                            paddingRight: '2px'
                        }}
                    />
                )) }    
            </div>

            <div id='config' className='horizontal'>
                <div id='size-select' className='horizontal'>
                    <p id='n'>N = {n}</p>
                    <input
                        type='range' min={10} max={100} value={n}
                        onChange={(e) => setN(parseInt(e.target.value))}
                    />
                </div>

                <button onClick={shuffle}>Shuffle</button>
                <button>Start</button>
            </div>
        </div>
    )
}
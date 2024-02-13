import React, { forwardRef, useEffect } from 'react'
import './_components.css'

interface WindowProps {
    n: number
}

interface WindowDimensions {
    width: number
    height: number

}

export default function Window({ n }: WindowProps) {
    const windowRef = React.useRef<HTMLDivElement>(null)

    const [array, setArray] = React.useState<number[]>([])
    const [dimensions, setDimensions] = React.useState<WindowDimensions>({ width: 0, height: 0 })


    // Get window dimensions
    useEffect(() => {
        if (windowRef.current) {
            const { width, height } = windowRef.current.getBoundingClientRect()
            setDimensions({ width, height })
        }
    }, [windowRef])

    // Init array of size n
    useEffect(() => {
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
        <div className='window' ref={windowRef}>

            {/* Render array */}
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
    )
}
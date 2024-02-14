import React from 'react'

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function useArray(n: number) {
    const size = n
    const [values, setValues] = React.useState<number[]>([])
    const [colors, setColors] = React.useState<boolean[]>([])

    // Initialize array
    React.useEffect(() => {
        const val: number[] = []
        const col: boolean[] = []

        for (let i = 1; i <= n; i++) {
            val.push(i)
            col.push(false)
        }

        setValues(val)
        setColors(col)
    }, [n])


    // Swap elements with delay
    const swap = async (i: number, j: number, delay=5) => {
        colors[i] = true ; colors[j] = true
        setColors([...colors])
        const temp = values[i] ; values[i] = values[j] ; values[j] = temp
        await wait(delay)
        colors[i] = false ; colors[j] = false
        setValues([...values]) ; setColors([...colors])
    }

    // Shuffle array - Fisher-Yates
    const shuffle = async () => {
        for (let i = 0; i < n; i++) {
            const j = Math.floor(Math.random() * n)
            await swap(i, j, 0)
        }
    }

    return { size, values, colors, swap, shuffle }
}
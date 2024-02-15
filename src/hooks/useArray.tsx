import React from 'react'

export default function useArray(n: number, delay = 10) {
    const size = n
    const [values, setValues] = React.useState<number[]>([])
    const [colors, setColors] = React.useState<boolean[]>([])

    const [accessCount, setAccessCount] = React.useState(0)
    const [swapCount, setSwapCount] = React.useState(0)

    const delayRef = React.useRef(delay)

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

    // Update delay
    React.useEffect(() => {
        delayRef.current = delay
    }, [delay])

    // Reset counts
    const resetStats = () => {
        setAccessCount(0)
        setSwapCount(0)
    }

    // Wait function
    const wait = () => new Promise(resolve => setTimeout(resolve, delayRef.current))

    // Get element with delay
    const get = async (i: number, stats=true) => {
        setColors(prev => { prev[i] = true; return prev })
        await wait()
        setColors(prev => { prev[i] = false; return prev })

        if (stats) setAccessCount(prev => prev + 1)
        return values[i]
    }

    // Swap elements with delay
    const swap = async (i: number, j: number, stats=true) => {
        colors[i] = true; colors[j] = true
        setColors([...colors])
        const temp = values[i]; values[i] = values[j]; values[j] = temp
        setValues([...values])
        await wait()
        colors[i] = false; colors[j] = false
        setColors([...colors])
        if (stats) setSwapCount(prev => prev + 1)
    }

    // Shuffle array - Fisher-Yates
    const shuffle = async () => {
        resetStats()

        for (let i = 0; i < n; i++) {
            const j = Math.floor(Math.random() * n)
            await swap(i, j, false)
        }
    }

    return { size, values, colors, get, swap, shuffle, accessCount, swapCount, resetStats }
}
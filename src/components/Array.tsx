import React from 'react'
import './_components.css'

interface WindowDimensions {
    width: number
    height: number
}

interface ArrayProps {
    array: {
        size: number,
        values: number[],
        colors: boolean[]
    }
}

export default function Array({ array }: ArrayProps) {
    const windowRef = React.useRef<HTMLDivElement>(null) 
    const [dimensions, setDimensions] = React.useState<WindowDimensions>({ width: 0, height: 0 })

    const n = array.size
    const values = array.values
    const colors = array.colors

    // Get window dimensions
    React.useEffect(() => {
        const fetchDimensions = () => {
            if (windowRef.current) {
                const { width, height } = windowRef.current.getBoundingClientRect()
                console.log(width, height)
                setDimensions({ width, height })
            }
        }
        fetchDimensions()

        window.addEventListener('resize', fetchDimensions)
        return () => window.removeEventListener('resize', fetchDimensions)
    }, [windowRef])


    return (
        <div className='window' ref={windowRef}>
            { values.map((value, index) => (
                <div
                    key={index}
                    className='bar'
                    style={{
                        backgroundColor: colors[index] ? 'red' : 'black',
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
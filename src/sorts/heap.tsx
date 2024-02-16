
interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    swap: (i: number, j: number) => Promise<void>
}

export default async function heapSort(array: Array) {
    const n = array.size
    const swap = array.swap

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(array, n, i)
    }

    for (let i = n - 1; i > 0; i--) {
        await swap(0, i)
        await heapify(array, i, 0)
    }
}

async function heapify(array: Array, n: number, i: number) {
    let largest = i
    let largestValue = await array.get(largest)

    const left = 2 * i + 1
    const right = 2 * i + 2
    const leftValue = await array.get(left)
    const rightValue = await array.get(right)

    if (left < n && leftValue > largestValue) {
        largest = left
        largestValue = leftValue
    }

    if (right < n && rightValue > largestValue) {
        largest = right
        largestValue = rightValue
    }

    if (largest !== i) {
        await array.swap(i, largest)
        await heapify(array, n, largest)
    }
}
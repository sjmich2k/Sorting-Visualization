
interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    swap: (i: number, j: number) => Promise<void>
}

export default function quickSort(array: Array) {
    const n = array.size
    quickSortRec(array, 0, n - 1)
}

async function quickSortRec(array: Array, low: number, high: number) {
    if (low >= high) return
    const pivot = await array.get(high)

    let lessThanPivot = low
    for (let i = low; i < high; i++) {
        const v = await array.get(i)
        if (v < pivot) {
            await array.swap(i, lessThanPivot)
            lessThanPivot++
        }
    }
    await array.swap(lessThanPivot, high)

    await quickSortRec(array, low, lessThanPivot - 1)
    await quickSortRec(array, lessThanPivot + 1, high)
}
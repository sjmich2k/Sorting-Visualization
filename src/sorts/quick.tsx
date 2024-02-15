import { Array } from "../App";

export default function quickSort(array: Array) {
    const n = array.size
    const get = array.get
    const swap = array.swap

    quickSortRec(get, 0, n - 1, swap)
}

async function quickSortRec(get: (i: number) => Promise<number>, low: number, high: number, swap: (i: number, j: number) => Promise<void>) {
    if (low >= high) return
    const pivot = await get(high)

    let lessThanPivot = low
    for (let i = low; i < high; i++) {
        const v = await get(i)
        if (v < pivot) {
            await swap(i, lessThanPivot)
            lessThanPivot++
        }
    }
    await swap(lessThanPivot, high)

    await quickSortRec(get, low, lessThanPivot - 1, swap)
    await quickSortRec(get, lessThanPivot + 1, high, swap)
}
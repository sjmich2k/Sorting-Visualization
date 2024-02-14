import { Array } from "../App";

export default function quickSort(array: Array) {
    const n = array.size
    const values = array.values
    const swap = array.swap

    quickSortRec(values, 0, n - 1, swap)
}

async function quickSortRec(values: number[], low: number, high: number, swap: (i: number, j: number) => Promise<void>) {
    if (low >= high) return
    const pivot = values[high]

    let lessThanPivot = low
    for (let i = low; i < high; i++) {
        if (values[i] < pivot) {
            await swap(i, lessThanPivot)
            lessThanPivot++
        }
    }
    await swap(lessThanPivot, high)

    await quickSortRec(values, low, lessThanPivot - 1, swap)
    await quickSortRec(values, lessThanPivot + 1, high, swap)
}
import { Array } from '../App'

export default async function selectionSort(array: Array) {
    const n = array.size
    const values = array.values
    const swap = array.swap

    for (let i = 0; i < n; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (values[j] < values[min]) {
                min = j
            }
        }
        await swap(i, min)
    }
}
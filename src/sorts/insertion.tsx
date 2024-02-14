import { Array } from '../App'

export default async function insertionSort(array: Array) {
    const n = array.size
    const values = array.values
    const swap = array.swap

    for (let i = 1; i < n; i++) {
        let j = i
        while (j > 0 && values[j] < values[j - 1]) {
            await swap(j, j - 1)
            j--
        }
    }
}
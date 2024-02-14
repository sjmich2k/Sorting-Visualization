import { Array } from '../App'

export default async function bubbleSort(array: Array) {
    const n = array.size
    const values = array.values
    const swap = array.swap

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                await swap(j, j + 1)
            }
        }
    }
}
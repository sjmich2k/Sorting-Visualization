import { Array } from '../App'

export default async function bogoSort(array: Array) {
    const values = array.values
    const swap = array.swap

    while (!isSorted(values)) {
        await shuffle(values, swap)
    }
}

function isSorted(values: number[]) {
    for (let i = 1; i < values.length; i++) {
        if (values[i] < values[i - 1]) {
            return false
        }
    }
    return true
}

async function shuffle(values: number[], swap: (i: number, j: number) => Promise<void>) {
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        await swap(i, j)
    }
}
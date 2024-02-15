import { Array } from '../App'

export default async function bogoSort(array: Array) {
    const n = array.size
    const get = array.get
    const swap = array.swap

    let sorted = await isSorted(n, get)

    while (!sorted) {
        await shuffle(n, swap)
        sorted = await isSorted(n, get)
    }
}

async function isSorted(n: number, get: (i: number) => Promise<number>) {
    for (let i = 1; i < n; i++) {
        const v1 = await get(i)
        const v2 = await get(i - 1)
        if (v1 < v2) {
            return false
        }
    }
    return true
}

async function shuffle(n: number, swap: (i: number, j: number) => Promise<void>) {
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        await swap(i, j)
    }
}
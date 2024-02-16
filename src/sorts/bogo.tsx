
interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    swap: (i: number, j: number) => Promise<void>
}

export default async function bogoSort(array: Array) {
    let sorted = await isSorted(array)

    while (!sorted) {
        await shuffle(array)
        sorted = await isSorted(array)
    }
}

async function isSorted(array: Array) {
    for (let i = 1; i < array.size; i++) {
        const v1 = await array.get(i)
        const v2 = await array.get(i - 1)
        if (v1 < v2) {
            return false
        }
    }
    return true
}

async function shuffle(array: Array) {
    for (let i = array.size - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        await array.swap(i, j)
    }
}

interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    swap: (i: number, j: number) => Promise<void>
}

export default async function bubbleSort(array: Array) {
    const n = array.size
    const get = array.get
    const swap = array.swap

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const v1 = await get(j)
            const v2 = await get(j + 1)
            if (v1 > v2) {
                await swap(j, j + 1)
            }
        }
    }
}
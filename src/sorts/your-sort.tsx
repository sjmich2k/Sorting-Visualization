
interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    set: (i: number, v: number) => Promise<void>,
    swap: (i: number, j: number) => Promise<void>
}

export default async function yourSort(array: Array) {

    // --- TODO
    // Implement your sorting algorithm here
    // Below is a dummy selection sort

    const n = array.size
    const get = array.get
    const swap = array.swap

    for (let i = 0; i < n; i++) {
        let minInd = i
        let minVal = await get(i)

        for (let j = i + 1; j < n; j++) {
            const v1 = await get(j)

            if (v1 < minVal) {
                minInd = j
                minVal = await get(j)
            }
        }

        await swap(i, minInd)
    }

    // --- End of your sorting algorithm

}
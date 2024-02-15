import { Array } from '../App'

export default async function selectionSort(array: Array) {
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
}
import { Array } from '../App'

export default async function yourSort(array: Array) {
    const n = array.size
    const get = array.get
    const swap = array.swap

    // TODO - Edit this dummy selection sort to implement your own sort!
    for (let i = 0; i < n; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            const v1 = await get(j)
            const v2 = await get(min)
            if (v1 < v2) {
                min = j
            }
        }
        await swap(i, min)
    }
}
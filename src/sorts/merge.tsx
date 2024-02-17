
interface Array {
    size: number,
    get: (i: number) => Promise<number>,
    set: (i: number, v: number) => Promise<void>,
    swap: (i: number, j: number) => Promise<void>
}

export default async function mergeSort(array: Array) {
    await mergeRec(array, 0, array.size - 1)
}


async function mergeRec(array: Array, l: number, r: number) {
    if (l < r) {
        const m = Math.floor((l + r) / 2)

        await mergeRec(array, l, m)
        await mergeRec(array, m + 1, r)
        await merge(array, l, m, r)
    }
}

async function merge(array: Array, l: number, m: number, r: number) {
    const numLeft = m - l + 1
    const numRight = r - m

    const arrLeft = new Array(numLeft)
    const arrRight = new Array(numRight)

    for (let i = 0; i < numLeft; i++) {
        arrLeft[i] = await array.get(l + i)
    }
    for (let i = 0; i < numRight; i++) {
        arrRight[i] = await array.get(m + 1 + i)
    }

    let i = 0, j = 0, k = l
    while (i < numLeft && j < numRight) {
        if (arrLeft[i] <= arrRight[j]) {
            await array.set(k, arrLeft[i])
            i++
        } else {
            await array.set(k, arrRight[j])
            j++
        }
        k++
    }

    while (i < numLeft) {
        await array.set(k, arrLeft[i])
        i++; k++
    }

    while (j < numRight) {
        await array.set(k, arrRight[j])
        j++; k++
    }
}
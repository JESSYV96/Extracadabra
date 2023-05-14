import axios from 'axios';

function increaseOccurenceOf(valueToIncrement: number, step = 1): number {
    return valueToIncrement += step
}

// /**
//  * @param {number} valueToIncrement 
//  * @param {number} step 
//  * @returns {number}
//  */
// function increaseOccurenceOf(valueToIncrement, step = 1) {
//     return valueToIncrement += step
// }

export function getOcurrenceNumber(numberArray: string[]): Map<string, number> {
    const ocurrencesNumber: Map<string, number> = new Map()
    for (const number of numberArray) {
        const stringInt = number.toString()
        if (ocurrencesNumber.has(stringInt)) {
            const currentValue = ocurrencesNumber.get(stringInt)
            if (currentValue) {
                const newValue: number = increaseOccurenceOf(currentValue)
                ocurrencesNumber.set(stringInt, newValue)
            }
        } else {
            ocurrencesNumber.set(stringInt, 1)
        }
    }

    return ocurrencesNumber
}

// /**
//  * 
//  * @param {string[]} numberArray 
//  * @returns {Map<string, number>}
//  */
// export function getOcurrenceNumber(numberArray) {
//     const ocurrencesNumber = new Map()
//     for (const number of numberArray) {
//         const stringInt = number.toString()
//         if (ocurrencesNumber.has(stringInt)) {
//             const currentValue = ocurrencesNumber.get(stringInt)
//             const newValue = increaseOccurenceOf(currentValue)
//             ocurrencesNumber.set(stringInt, newValue)
//         } else {
//             ocurrencesNumber.set(stringInt, 1)
//         }
//     }

//     return ocurrencesNumber
// }



export async function fetchNumbersList(numberListLength = 200): Promise<string[]> {
    const { data } = await axios.get<string>(`https://www.random.org/integers/?num=${numberListLength}&min=1&max=9&col=1&base=10&format=plain&rnd=new`)
    return data.split('\n', numberListLength);
}

// /**
//  * @param {number} numberListLength 
//  * @returns {string[]} 
//  */
// export async function fetchNumbersList(numberListLength = 200) {
//     const { data } = await axios.get(`https://www.random.org/integers/?num=${numberListLength}&min=1&max=9&col=1&base=10&format=plain&rnd=new`)

//     return data.split('\n', numberListLength);
// }

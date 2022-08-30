import axios from 'axios';

/**
 * @param {number} valueToIncrement 
 * @param {number} step 
 * @returns {number}
 */
function increaseOccurenceOf(valueToIncrement, step = 1) {
    return valueToIncrement += step
}

/**
 * 
 * @param {string[]} numberArray 
 * @returns {Map<string, number>}
 */
export function getOcurrenceNumber(numberArray) {
    const ocurrencesNumber = new Map()
    for (const number of numberArray) {
        const stringInt = number.toString()
        if (ocurrencesNumber.has(stringInt)) {
            const currentValue = ocurrencesNumber.get(stringInt)
            const newValue = increaseOccurenceOf(currentValue)
            ocurrencesNumber.set(stringInt, newValue)
        } else {
            ocurrencesNumber.set(stringInt, 1)
        }
    }

    return ocurrencesNumber
}

/**
 * @param {number} numberListLength 
 * @returns {string[]} 
 */
export async function fetchNumbersList(numberListLength = 200) {
    const { data } = await axios.get(`https://www.random.org/integers/?num=${numberListLength}&min=1&max=9&col=1&base=10&format=plain&rnd=new`)

    return data.split('\n', numberListLength);
}


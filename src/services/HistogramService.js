import axios from 'axios';

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
        if (ocurrencesNumber.has(number)) {
            const currentValue = ocurrencesNumber.get(number)
            const newValue = increaseOccurenceOf(currentValue)
            ocurrencesNumber.set(number, newValue)
        } else {
            ocurrencesNumber.set(number, 1)
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


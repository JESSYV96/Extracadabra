import { getOcurrenceNumber } from "../src/services/HistogramService";

describe("Histogram helper", () => {
    it("renders an ocurrences of number", () => {
        const numberArray = [
            "9", "1", "9", "2", "3",
            "2", "9", "6", "6", "1", "7"
        ]

        const expectedResult = new Map()
        expectedResult.set("9", 3)
        expectedResult.set("1", 2)
        expectedResult.set("2", 2)
        expectedResult.set("3", 1)
        expectedResult.set("6", 2)
        expectedResult.set("7", 1)

        expect(getOcurrenceNumber(numberArray)).toEqual(expectedResult);
    });

    it("[Triangulation] renders an ocurrences of number", () => {
        const numberArray = [
            "9", "1", "9", "2", "3", "4",
            "2", "4", "6", "1", "7", "3", "6"
        ]

        const expectedResult = new Map()
        expectedResult.set("1", 2)
        expectedResult.set("2", 2)
        expectedResult.set("3", 2)
        expectedResult.set("4", 2)
        expectedResult.set("6", 2)
        expectedResult.set("7", 1)
        expectedResult.set("9", 2)

        expect(getOcurrenceNumber(numberArray)).toEqual(expectedResult);
    });


    it("give us an array with integer", () => {
        const numberArray = [
            "9", "1", 9, "2", "3",
            "2", "9", "6", "6", 1, 7
        ]

        const expectedResult = new Map()
        expectedResult.set("9", 3)
        expectedResult.set("1", 2)
        expectedResult.set("2", 2)
        expectedResult.set("3", 1)
        expectedResult.set("6", 2)
        expectedResult.set("7", 1)

        expect(getOcurrenceNumber(numberArray)).toEqual(expectedResult);
    })

    it('give us an integer\'s array', () => {
        const numberArray = [
            9, 1, 9, 2, 3, 4, 8, 5,
            2, 4, 6, 1, 7, 3, 6
        ]
        const expectedResult = new Map()
        expectedResult.set("1", 2)
        expectedResult.set("2", 2)
        expectedResult.set("3", 2)
        expectedResult.set("4", 2)
        expectedResult.set("5", 1)
        expectedResult.set("6", 2)
        expectedResult.set("7", 1)
        expectedResult.set("8", 1)
        expectedResult.set("9", 2)

        expect(getOcurrenceNumber(numberArray)).toEqual(expectedResult);

    })
});

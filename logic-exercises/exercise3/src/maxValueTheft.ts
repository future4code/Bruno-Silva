export const maxValueTheft = (
    valuesOfHouseArray: number[],
    houseIndex: number = 0,
    finalValueOfTheft: number = 0,
    possibleValueOfTheft: number = 0
): number => {
    if (valuesOfHouseArray.length < 1) {
        return finalValueOfTheft;
    };

    if (houseIndex <= valuesOfHouseArray.length - 1) {
        for (let i=houseIndex; i<valuesOfHouseArray.length; i = i + 2) {
            possibleValueOfTheft += valuesOfHouseArray[i];
        };

        return maxValueTheft(
            valuesOfHouseArray,
            houseIndex + 1,
            finalValueOfTheft < possibleValueOfTheft? possibleValueOfTheft : finalValueOfTheft,
            0
        );
    } else {
        return finalValueOfTheft;
    };
};
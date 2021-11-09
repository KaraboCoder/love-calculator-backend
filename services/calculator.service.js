const { removeSpaces } = require("../utils")

let numbers = []

const calculate = (name1, name2) => {
    const loveString = removeSpaces(`${name1}loves${name2}`.toLowerCase())
    calculateOccurrences(loveString)
    const lovePercentage = calculateLovePercentage(numbers).join('')
    numbers = [] // reset array before returning
    return lovePercentage

}

const calculateOccurrences = (str = '') => {
    let loveString = str
    let occurrence = 0

    if (loveString.length === 0)
        return
    let searchCharacter = loveString[0]
    occurrence = loveString.match(new RegExp(searchCharacter, 'g')).length
    loveString = loveString.replace(new RegExp(searchCharacter, 'g'), '')
    numbers.push(occurrence)
    return calculateOccurrences(loveString)
}

const calculateLovePercentage = (occurrences = []) => {
    let midItem
    let newOccurrencesArray = []
    if (occurrences.length <= 2)
        return occurrences
    if (occurrences.length % 2 > 0) {
        const index = Math.floor(occurrences.length / 2)//find the index of the middle number
        midItem = occurrences[index]
        occurrences.splice(index, 1)//remove middle number/item
    }
    /*Perform calculations */
    for (i = 0; i < occurrences.length / 2; i++) {
        const newValue = occurrences[i] + occurrences[occurrences.length - (i + 1)]
        if (newValue >= 10) {//convert 2 digit value into 2 separate numbers 
            newOccurrencesArray.push(Math.floor(newValue / 10))//get first digit
            newOccurrencesArray.push(newValue % 10)//get second digit
        } else {
            newOccurrencesArray.push(newValue)//if single digit, just add to array
        }

    }
    if (midItem != undefined) newOccurrencesArray.push(midItem)
    return calculateLovePercentage(newOccurrencesArray)
}

module.exports = {
    calculate
}
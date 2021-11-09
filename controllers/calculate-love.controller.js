const { calculatorService } = require('../services')
const { removeSpaces } = require('../utils')


const { calculate } = calculatorService

const calculateLove = (req, res, next) => {
    const { name1, name2 } = req.body
    console.log(req.body)
    if (removeSpaces(name1) === '' || removeSpaces(name2) === '') {
        res.status(400).json({
            success: false,
            message: 'Inputs must not be empty.'
        })
        next()
        return
    }
    try {
        const love = calculate(name1, name2)
        res.status(200).json({ love })
        next()
    } catch (e) {
        console.log(e)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    calculateLove
}
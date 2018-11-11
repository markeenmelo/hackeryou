const sentencer = require('sentencer')

const names = [
    'Beth',
    'Johnnie',
    'Dave',
    'Rachel',
    'Newtown',
]

const pickName = () => {
    const randomName = Math.floor(Math.random() * names.length)
    return names[randomName]
}

console.log(pickName(names))

module.exports = {
    randomName: pickName
}

exports.generateSentence = () => {
    return sentencer.make('The {{adjective }} brown {{ noun }} jumper over')
}

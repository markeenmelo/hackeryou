const Student = require('./models/student')
const Teacher = require('./models/teacher')

const hermione = new Student({
    firstName: 'Hermione',
    lastName: 'Granger',
    birthday: new Date('Sept 19 1973'),
    house: 'Gryffindor',
    friends: ['Ron', 'Harry', 'Talia', 'Mike']
})

const marcos = new Student({
    firstName: 'Marcos',
    lastName: 'Melo',
    birthday: new Date('Jun 10 1986'),
    house: 'Gryffindor',
    friends: ['Nara']
})

const nara = new Student({
    firstName: 'Nara',
    lastName: 'Lima',
    birthday: new Date('Sept 7 1984'),
    house: 'Gryffindor',
    friends: ['Marcos']
})

const aowss = new Teacher({
    firstName: 'Aowss',
    lastName: 'Ibrahim',
    birthday: new Date('Jan 8 1974'),
    subjects: ['JavaScript', 'NodeJS', 'Java']
})

const zlatko = new Teacher({
    firstName: 'Zlatko',
    lastName: 'Zahirovic',
    birthday: new Date('Jul 23 1983'),
    subjects: ['Networking']
})

const roger = new Teacher({
    firstName: 'Roger',
    lastName: 'Vasconcelos',
    birthday: new Date('Nov 8 1983'),
    subjects: ['Linux', 'Python']
})

module.exports = async () => {
    try {
        // Remove all existing students from database
        await Student.remove({})
        await Teacher.remove({})
        await hermione.save()
        await marcos.save()
        await nara.save()
        await aowss.save()
        await zlatko.save()
        await roger.save()
    } catch (e) {
        console.log(e)
    }
}

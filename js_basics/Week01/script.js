// const secondsInAMinute = 60;
// const secondsInAHour = secondsInAMinute * 60;
// const secondsInADay = secondsInAHour * 24;
// const secondsInAYear = secondsInADay * 365;

// const marcosAge = 32;
// const victorAge = 18;

// console.log('A year has ' + secondsInAYear + ' seconds');
// console.log('Marcos is ' + marcosAge * secondsInAYear + ' seconds old');
// console.log('Victor is ' + victorAge * secondsInAYear + ' seconds old');
// console.log(`A year has ${secondsInAYear} seconds`);
// console.log(`I am ${marcosAge * secondsInAYear} seconds old.`);
//
// function calculateAgeInSeconds(person, age) {
//     return `${person} is ${age * secondsInAYear} seconds old.`
// }
//
// console.log(calculateAgeInSeconds('Marcos', 32));

// let name = prompt('What is your name?');
// let age = prompt('What is your age?');
//
// console.log(`You are ${name} and you are ${age * secondsInAYear} seconds old.`);


// console.log("I'm just a value!");
// const schoolName = "HackerYou";
// const numOfStudents = 25;
// console.log(schoolName + " has " + numOfStudents + " students.");

// const name = prompt(`What is your name?`);
// if (name === 'Marcos') {
//     console.log(`Hello ${name}`)
// } else {
//     console.log(`Go away`)
// }

const computerChoice = "rock";
const userChoice = ("Choose rock, paper of scissor");

if (userChoice === computerChoice) {
    console.log("It is a tie")
} else if (userChoice === "paper") {
    console.log("It is a win")
} else if (userChoice === "scissor") {
    console.log("You loose")
} else {
    console.log("You need to use a right value")
}
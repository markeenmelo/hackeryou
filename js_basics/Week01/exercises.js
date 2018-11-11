// Exercises
// Level 1
console.log('Level 1');
for (let i = 5; i  <= 12; i++) {
    console.log(i)
}

// Level 2
console.log('\nLevel 2');
for (let i = 10; i > 0; i--) {
    console.log(i)
}

//Level 3
console.log('\nLevel 3');
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Level 4
console.log('\nLevel 4');
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0  &&  i % 5 === 0 ) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
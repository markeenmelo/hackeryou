let count = 0;
let goal;
//
//Save the goal in a variable
$('form').on('submit', () => {
    event.preventDefault();
    goal = $('#goal').val();
});

const goalMet = () => {
    if (count === parseInt(goal)) {
        alert('You got it')
    }
};

// Increase the number when the person clicks on "add"
$('#add').on('click', () => {
    count++;
    $('.counter').text(count);
    goalMet();
});

//Decrease the number when the person click on "subtract"
$('#subtract').on('click', () => {
    count--;
    $('.counter').text(count);
    goalMet();
});

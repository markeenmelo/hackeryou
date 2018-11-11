const pizza = {
    pie: [
        {
            title: 'Maker Pizza',
            price: '$$'
        },
        {
            title: 'Pizza Libretto',
            price: '$$'
        },
        {
            title: 'Dominoes',
            price: '$'
        },
        {
            title: 'Pizza Nova',
            price: '$'
        }
    ],
    slice: [
        {
            title: 'Pizzaiolo',
            price: '$$'
        },
        {
            title: 'North of Brooklyn',
            price: '$$'
        },
        {
            title: 'Pizza Pizza',
            price: '$'
        },
        {
            title: 'King Slice',
            price: '$'
        }
    ]
};

$(function () {
    console.log('ready!');

    $('#pizzaForm').on('submit', function (e) {
        e.preventDefault();
        const userPizzaSize = $('input[name=size]:checked').val();
        const userPizzaPrice = $('input[name=price]:checked').val();
        const restaurantArray = pizza[userPizzaSize];
        const filteredRestaurant = restaurantArray.filter(restaurant => userPizzaPrice === restaurant.price);
        const pickARestaurant = filteredRestaurant[Math.floor(Math.random() * filteredRestaurant.length)].title;
        $('.results').html(`Go to ${pickARestaurant}`)
    })
});

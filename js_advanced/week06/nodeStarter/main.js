const getColor = () => {
    $.ajax({
        url: 'http://localhost:3500/randomcolor',
        method: 'GET',
        dataType: 'json'
    })
        .then(res => $('body').css('background', res.color))
}


$('button').on('click', () => {
    getColor()
})


$(function() {
    console.log('ready');
    $('.js-thumbnails li').on('click', function() {
        const image = $(this).find('img');
        const imageSrc = image.data('main');
        console.log('image :' + image);
        // console.log('imageSrc' + imageSrc)
        // $('#main').attr('src', imageSrc);
        // $('.selected').removeClass('selected');
        // $('this').addClass('selected')
    })
});

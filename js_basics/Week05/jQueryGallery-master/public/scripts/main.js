'use strict';

$(function () {
    console.log('ready');
    $('.js-thumbnails li').on('click', function () {
        var image = $(this).find('img');
        var imageSrc = image.data('main');
        console.log('image :' + image);
        // console.log('imageSrc' + imageSrc)
        // $('#main').attr('src', imageSrc);
        // $('.selected').removeClass('selected');
        // $('this').addClass('selected')
    });
});
$('.main-background img').hide();
$('#less').hide();

function fadeBackgroundImages() {
    $(".main-background img").first().appendTo('.main-background').fadeOut(2000);
    $(".main-background img").first().fadeIn(2000);
    setTimeout(fadeBackgroundImages, 3000);
}
fadeBackgroundImages();

$(document).ready(function () {

    $('.btn-container h4').click(function () {
        $('.content').toggleClass('content-extend');
        $('#less').toggle();
        $('#more').toggle();
    })
    
});
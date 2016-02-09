$('.main-background img').hide();

function fadeBackgroundImages() {
    $(".main-background img").first().appendTo('.main-background').fadeOut(2000);
    $(".main-background img").first().fadeIn(2000);    
    setTimeout(fadeBackgroundImages, 3000);
}
fadeBackgroundImages();
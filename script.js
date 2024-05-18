$(".mute").click(function() {
    var bool = $("audio").prop("muted");
    $("audio").prop("muted",!bool);
    var abc = $(this).parent().find('img').toggle();
});

// Change header image after 2 seconds
var images = [
    'https://i.ibb.co/hdSjxSD/1.jpg',
    'https://i.ibb.co/hMPg6pS/2.jpg',
    'https://i.ibb.co/qdY4z7w/4.jpg',
    'https://i.ibb.co/rmMc5Mm/3.jpg',
    'https://i.ibb.co/Z6vSvg9/5.jpg'
],
index = 0,
maxImages = images.length - 1;

var timer = setInterval(function() {
    index = (index == maxImages) ? 0 : ++index;
    var currentImage = images[index];
    $('.images img').fadeOut(200, function() {
        $(this).attr("src", currentImage).fadeIn(200);
    });
}, 2000); // change interval to 2 seconds
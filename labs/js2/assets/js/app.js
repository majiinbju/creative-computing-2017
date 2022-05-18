$('.nav-item').click(function() {
var button_name = $(this).data('button');
$('.content').attr('class', 'column content');
// you do this to go in any order and get the color the buttons are assigned. it means, find content div, find class, you're trying to remove unnecessary classes after you click on one. column content changes to 
$('.content').addClass(button_name);

$('.nav-item').removeClass('active'); //so that it doesnt stay black once you click it aka active, this is looking at all items on the page. in fact, it is making an array. 
$('.about-text').addClass('hide');
$(this).addClass('active');


if (button_name == 'beyonce') {
$('.lightbox').removeClass('hide');
$('audio')[0].play(); // array, 0 is the first element, so first instance of audio. you need the array because before in remove class it made everything an array, so 0 indicates the first element in audio

} else if (button_name == 'about)') {
$('.about-text').removeClass('hide');
}
});



$('.close-button').click(function() {
$('.lightbox').addClass('hide');
// before we got into beyonece by lightbox and removing hide, so to get out we need to do the opposite aka add hide
$('audio')[0].pause(); 
$('.nav-item.beyonce').removeClass('active');
})
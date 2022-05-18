// clicking nav item to display image
//writing an if statement that checks which button was clicked
//remove the hiding class/feature for that button

//$('.nav-item').click(function(){
//if ($(this).hasClass('apple-button')) {
//$('.apple').removeClass('hide');		
//} else if ($(this).hasClass('nike-button')) {
//	$('nike').removeClass('hide');
//} else if ($(this).hasClass('disney-button')) {
//	$('disney').removeClass('hide');
//} else if ($(this).hasClass('vogue-button')) {
//	$('vogue').removeClass('hide');
//}
//});

// easier way to do this :

//$('.nav-item').click(function(){
//	var target_horse= $(this).data('horse');
//    $(target_horse).removeClass('hide');
//});

//$(.button_name).removeClass('hide'); 
//"target_horse" targets all buttons
//"target_apple" would target only apple, "target_nike" only nike etc
//the term horse in [.data('horse')] can be any word: jello, ice etc, it is a collective term used to target all your individual buttons at once


//how to get multiple logos to display

//if (target == 'apple') {                                
	//img_to_show = '<img class="apple" src="assets/img/apple.png" />';
	//} else if (target =='nike') {
	//img_to_show = '<img class="nike" src="assets/img/nike.png" />';
	//} else if (target =='disney') {
	//img_to_show = '<img class="disney" src="assets/img/disney.png" />';
	//} else if (target =='vogue') {
	//img_to_show = '<img class="vogue" src="assets/img/vogue.png" />';
	//}
	////"==" checking the value

$('.nav-item').click(function(){
	var img         = $(this).data('img');
	var class_name  = $(this).data('classname');
	var img_to_show = '<div class ="'+ class_name +' logo"> <img src="assets/img/' + img +'" /> </div>';
	$('.content').prepend(img_to_show);
	
	//$('.content').append(img_to_show);
	//find all the tags content and append this img tag to it
	//append put it at the back
	//prepend puts it at the front
	
});
















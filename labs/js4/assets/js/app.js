//1. click on ".button"
//2. randomly select an Object
//3. place object inside of "content"

$('.button').click(function() {
var objects= ['assets/img/bunny.jpg',
			  'assets/img/cat.jpg',
			  'assets/img/dog.jpg',
			  'assets/img/sloth.jpg',
			  'assets/img/circle.png',
			  'assets/img/triangle.png',
			  'assets/img/square.jpg',
			  'Meow',
			  'Meep',
			  'Woof',
			  '...'
			  ];
var colors= [ 'blue',
			    'red',
			   'green'];

var random_object_number = Math.floor(Math.random() * objects.length);
var random_color_number = Math.floor(Math.random() * colors.length);
var object_to_use = objects[random_object_number];
var color_to_use = colors[random_color_number];
	
var result = '';
	if (random_object_number < 7){
	      result= '<div class="object"><img src="' + object_to_use + '" /></div>';
	} else { 
		result= '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
	} //creating an if statement,if the number is greater/equal to 6 or the number is greater than 7, it'll display the text and not an animal image
	//assigning a colour to objects greater than 7 
	
	
//var result = '<div class="object"><img src="' + object_to_use + '" /></div>'; //defining object before so that that line below isn't extremely long
 $('.content').prepend(result);
	
	
}); //making sure that the image responds to the button
$(document).on('ready', function() {
  
});

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// problem 1


for (var i = 0; i < animals.length - 1; i++) {
	console.log(animals[i]);
}


//problem 2
//
 
for (var i = 0; i < animals.length; i += 2) {
	console.log(animals[i]);
}


//problem 3

for (var i = animals.length - 1; i > -1; i--){
	console.log(animals[i]);
};

//problem 4

for (var i = 0; i < animals.length; i++){
	console.log(animals[i]);
	if (i > 0 && i < animals.length - 1){
		console.log(animals[i]);
	}
};
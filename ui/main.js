// counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
 
 
// Make a request to counter end point

// capture the response

// render the response

counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
} ;
// counter Code
alert('xxx');
var button = document.getElementById('counter');

button.onclick = function() {
 
 
// create the request object
var request = new XMLHttpRequest();

// capture the response and store it in the variable
request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
        // take some action
        if (request.status === 200) {
            var counter = request.responseText;
        }
    }
    // Not done yet
};
request.open('GET', 'http://nandatp.imad.hasura-app.io/counter', true);
request.send(null);

// counter Code
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
};

//submit name

var nameinput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
  // Make a request to the server and send the name
  
  
  // Capture a list of names and render it as a list
  var names = ['name1', 'name2', 'name3', 'name4'];
  var list = '';
  for(var i=0; i<names.length; i++){
  list += '<li>' + names[i] + '</li>';
    }
 var ul = document.getElementById('namelist');
 ul.innerHTML = list;
};
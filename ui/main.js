console.log('Loaded!');
// main text change
var element = document.getElementById('main-text');

element.innerHtml = 'New Value';

//move img
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginleft = '100px';
    };
    
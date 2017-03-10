console.log('Loaded!');
//change the text of center text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//move image
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight () 
{
marginleft = marginleft + 5;
madi.style.marginleft = marginLeft + 'px';
}
madi.onclick = function ()
{
var interval = setInterval(moveRight, 50);
};
    
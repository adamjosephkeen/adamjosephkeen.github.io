// ADD NEW ITEM TO END OF LIST

var newChild = document.createElement('li');
var text = document.createTextNode('test');
newChild.appendChild(text);
var element;
element = document.getElementsByTagName('ul');
element[0].appendChild(newChild);



// ADD NEW ITEM START OF LIST

var newChild2 = document.createElement('li');
var text2 = document.createTextNode('test2');
newChild2.appendChild(text2);

element[0].insertBefore(newChild2, element[0].firstElementChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS

var new_class = 'cool';
var list_items = document.getElementsByTagName('li');
list_items[0].className = 'cool';
list_items[1].className = 'cool';
list_items[2].className = 'cool';
list_items[3].className = 'cool';
list_items[4].className = 'cool';
list_items[5].className = 'cool';



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var count = element[0].childElementCount;

var heading = document.getElementById("header");
heading.innerHTML = 'count';

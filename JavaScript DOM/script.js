// Root Node
console.log(document.documentElement) //documentElement is Root Node and Element Node html
console.log(document.head) // accessing head
console.log(document.body) // accessing body

// Children | Child Elements
console.log(document.body.childNodes)
console.log(document.body.children) // to avoid indentation | extra spaces like holes & children react like an array but not actually array

// Traversal through document.body.children
for(node of document.body.children) { //we can also use childNodes
console.log(node)
}

// to convert an Array
const childrensOfBody = Array.from(document.body.children)
console.log(childrensOfBody)

// First child and Last child
console.log(document.body.firstChild)
console.log(document.body.firstElementChild) // to avoid indentation | Cage
console.log(document.body.lastChild)
console.log(document.body.lastElementChild) // to avoid indentation | Cage

// Siblings
console.log(document.body.children[0])
const ulTag = document.body.children[0]
console.log(ulTag.nextElementSibling) // to avoid indentation or see only element object we use nextElementSibling over nextSibling

// ID Search
/*console.log(id_intro)
id_intro.style.background = 'red' */

const idIntro = document.getElementById('id_intro');
idIntro.style.fontSize = '1.6rem'
idIntro.style.color = 'red'

document.getElementById('id_content').innerHTML = "The text from h3 element from above = " + idIntro.innerHTML;

// Class Search
const classElement = document.getElementsByClassName('c_intro');
document.getElementById('class_content').innerHTML = "First element at index 0 = " + classElement[0].innerHTML;

//By Tag Name
console.log(document.getElementsByTagName("table"))

const tagNameElement = document.getElementsByTagName('h3');
document.getElementById('tagName_content').innerHTML = 'Element at index 0 = ' + tagNameElement[0].innerHTML;

const tagA = document.getElementById("tagName");
const tagB = tagA.getElementsByTagName("h3");

document.getElementById("tagName_demo").innerHTML = 'Element at index 0 ' + tagB[0].innerHTML;

//By querySelectorAll
const querySelector = document.querySelectorAll("h3.querySelectorAll");
document.getElementById("querySelectorAll_content").innerHTML = 'The Second Element at index 1: ' + querySelector[1].innerHTML;

//By querySelector
document.querySelector("p").style.backgroundColor = "red";

//Attributes
console.log(element.id)
/* Here data is random attribute so we cannot access it directly. only access html attributes directly because they react as a properties */
console.log(element.getAttribute('data'))
console.log(element.setAttribute('order-placed', 'pending')) //attribute name and value
console.log(element.getAttribute('order-placed'))
console.log(element.hasAttribute('order-placed'))
console.log(element.removeAttribute('order-placed'))
console.log(element.hasAttribute('order-placed'))
console.log(element.attributes)

//Events
/* 2nd Method: Average */
/* function callMe(){
    alert("Hello World!...")
}
//if we write callMe() we call the function which is not valid and if we write callMe we pass the function
clickBtn.onclick = callMe */

/*3rd Method: Best Practice*/
function clickMe(){
    alert("Hello World!...")
}
clickBtn.addEventListener('click', clickMe)

//Anonymous function: for multiple events
/* clickBtn.addEventListener('click', function() {
    alert('Thanks')
}) */

//Using this reference with Events
/* function callMe(){
console.log(this) //with this reference we got the button in console
alert("Thanks for watching")
}
clickBtn.addEventListener('click', callMe) */

//to remove event
/* clickBtn.removeEventListener('click', callMe) */ //Note: We cannot remove event using Anonymous function


//Accessing Events Object like where from call cursor position
function callMe(event) {
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.clientY)
    console.log(event.clientX)
    alert("Thanks!...")
}
clickBtn.addEventListener('click', callMe)

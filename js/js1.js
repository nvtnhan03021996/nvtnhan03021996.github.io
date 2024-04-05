function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}
// getFullYear la ham cua currentTime

var name = prompt("Enter your name: ");

var yearBorn = prompt("Enter the year you were born")
var age;
age = calculateAge(yearBorn);

console.log(name + " is " + age + " year old");
// case year born, naming convention myMother
// học được cách tạo hàm gồm các biến và cách gọi hàm
if (age < 18) {
	console.log("you are very young") 
}

var message = "";
	if (age < 18) {
	message += "You are";
	var i=0;
	while (i<5) {
		message += " very";
		i++;
	}
	message += " young";
	if ((age>5) && (age<10)) {
			message = "you are a kid";
		}

} else if (age<50) {
	message = "you are quite young";
} else {
	message = "You are over 50 years old";
}
console.log(message);


// Script for side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "300px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}

// Close side navigation
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

var gender = prompt("Are you male or female? (male/feamle)")

switch (gender) {
	case "male":
		console.log("You are a man");
		break;
	case "female":
		console.log("You are a woman");
		break
	default:
		console.log("Wrong gender input, undefine")
}

var isClose = confirm("Do you want to close current tab")

var message = "";
if (isClose === true) {
	for (var i=0; i<10; i++) {
		message += " bye";
	}
	console.log("Bye bye")
} else {
	message = "Thank you for staying with me"
}

console.log(message);


function init() {
	var html_btn = document.getElementById("btn");
	html_btn.onclick = convert_button_click;

	var h2 = document.getElementById("click_h2");
	h2.onclick = h2_click;

	var all_h3 = document.getElementById("h3");
 	var i=0;
 	while (i < all_h3.length) {
 		all_h3[i].onclick = all_h3_click;
 		i++;
 	}
}

function all_h3_click() {
	var h3_content = document.getElementById("h3_content");
	h3_content.innerHTML = "You click on of the h3 element."
}

function h2_click() {
	var h2_content = document.getElementById("h2_content");
	h2_content.textContent = "<h1>You clicked h2 !!!</h1>";
}

function print_conversion(usd, vnd) {
	var html_message = document.getElementById("message");
	html_message.textContent = "You enter: " + usd + " USD, this is converted to VND: " + vnd + "k";
}

function convert_button_click() {
	var usd = prompt("Enter USD: ");
	var vnd = usd*24;
	print_conversion(usd, vnd)
}

window.onload = init;


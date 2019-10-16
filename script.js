// 01-Intro

//alert("Coffee time");
/* document.write("<h1>My first javascript</h1>"); */

/*
var x = 8;
var y = 9, z = 10.7;
document.write(x+y);
document.write("<br />Sum of x and z is " + (x+z));

//JavaScript Objects
phone = {color: "black", type:"mobile"};
document.write("<br />" + phone.color);
*/

//JavaScript functions
/* function() defines a javascript function as it must be obvious.
   Surrounding it with () makes it into an expression.
   Following it with () executes it. So the example below is a
   self-executing anonymous function where we define it and force
   executing it immediately */
 
 /*
 y = function() {
	 var x=3, z=4;
	 return x*z;
 }
 
 document.write(y);
 document.write("<br />");
 document.write(y());
 
 
function add() {
	 var x=3, z=4;
	 return x*z;
 }
 
w = add; //same as above
document.write("<br />");
document.write(w);
*/

//02 Accessing DOM Elements
//grabbing a single element and analyzing it
/*
var myLogoLink = document.getElementById("list");
document.write(myLogoLink.innerHTML);
document.write("<p>Children number is: " + myLogoLink.childNodes.length + "</p>");
document.write(myLogoLink.innerText);

//how many link tags (a)?
var navItems = document.getElementsByTagName("a");
document.write("<br />Total links are: " + navItems.length);
*/

//03 Changing DOM Elements
/*
var mainContent = document.getElementById("content_header");
mainContent.setAttribute("align", "right");

//var sidebar = document.getElementsByClassName("sidebar");
//alert(sidebar[0].innerText);

//var links = document.getElementsByTagName("a");
//alert(links[2].innerText);

main = document.getElementById("main");
var arrayOfH1s = main.getElementsByTagName("h1");
arrayOfH1s[0].innerHTML = "New Title";
arrayOfH1s[1].innerHTML = "New Content";
*/

//04 Creating DOM Elements
//create the elements
/*
var newHeading = document.createElement("h1");
var newPara = document.createElement("p");

//to add content, use innerHTML
newHeading.innerHTML = "Did you know?";
newPara.innerHTML = "JavaScript has nothing to do with Java?";

//now attach them to the document
document.getElementById("content_header").appendChild(newHeading);
document.getElementById("content_header").appendChild(newPara);
*/

//05 JS Events
/*
var emailField = document.getElementById("your_email");

emailField.onfocus = function() {
	if (emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "your email";
	}
};
*/

//06 Timers in JavaScript
//Two methods for timers: setTimeout() and setInterval() (single/repeating)
function simpleMessage() {
	alert("It's coffee time");
}

//setTimeout(simpleMessage, 5000);

var myImage = document.getElementById("mainImage");
var imageArray = ["images/image01.jpg", "images/image02.jpg",
				  "images/image03.jpg", "images/image04.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex == imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 3000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}
// Katelyn Curtiss
// 15 May 2024
// Simple Addition Calculator 

document.getElementById("btn").addEventListener("click, btnClicked");

function btnClicked() {
// Input 
let num1 = +document.getElementById("num1-in").value;
let num2 = +document.getElementById("num2-in").value;

// Process
let total = num1 + num2;

// Output
document.getElementsById("output").innerHTML = total; 
}
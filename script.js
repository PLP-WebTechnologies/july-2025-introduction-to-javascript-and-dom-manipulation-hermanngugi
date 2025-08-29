// =====================
// Part 1: Variables & Conditionals
// =====================
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", function() {
    const age = Number(document.getElementById("ageInput").value);
    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

// =====================
// Part 2: Functions
// =====================
function sumNumbers(a, b) {
    return a + b;
}

const sumBtn = document.getElementById("sumBtn");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", function() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const total = sumNumbers(num1, num2);
    sumResult.textContent = `Sum: ${total}`;
});

// Another custom function
function greet(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

// =====================
// Part 3: Loops
// =====================
const loopBtn = document.getElementById("loopBtn");
const loopResult = document.getElementById("loopResult");

loopBtn.addEventListener("click", function() {
    let numbers = "";
    // For loop
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    // While loop
    let j = 6;
    while (j <= 10) {
        numbers += j + " ";
        j++;
    }
    loopResult.textContent = numbers.trim();
});

// =====================
// Part 4: DOM Manipulation
// =====================
const colorBtn = document.getElementById("colorBtn");
const toggleBtn = document.getElementById("toggleBtn");
const domText = document.getElementById("domText");

// Change background color
colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Toggle text visibility
toggleBtn.addEventListener("click", function() {
    domText.style.display = domText.style.display === "none" ? "block" : "none";
});

// Create a new paragraph dynamically
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created dynamically!";
document.body.appendChild(newParagraph);

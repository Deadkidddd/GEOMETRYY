//definitions
function change(element, diffPosition, fontSize, color) {
    // Apply the styles to the element
    element.style.position = diffPosition;
    element.style.fontSize = fontSize;
    element.style.color = color;

    // Log the changes for debugging
console.log(`Changes applied: position=${diffPosition}, fontSize=${fontSize}, color=${color}`);
}

function changeTop(element, topOffset) {
    const calculatedTop = topOffset; // Use the provided topOffset directly
    element.style.top = `${calculatedTop}%`; // Convert to a valid CSS unit
    console.log(`Top position set to: ${calculatedTop}%`);
}

//Navigation

//Number for even or odd to show/hide text because i overcomplicate things
let numberBar = 0; // Initialize the number variable
let numberTypeBar;

function evenOrOddB() {
    if (numberBar %2 == 0) {
        numberTypeBar = "even";
    }
    else{
        numberTypeBar = "odd";
    }
};

//shows navigation bar

const navBtn = document.getElementById("dropdown_menu");
const navElements = document.getElementsByClassName("dm_material");

navBtn.onclick = function(){
evenOrOddB();
if(numberTypeBar == `odd`){
    for (let nav of navElements) {
        nav.style.animation = "fadein 0.5s";
        nav.style.display = "block";
    }
}
if(numberTypeBar == `even`){
    for (let nav of navElements) {
        nav.style.animation = "fadeout 0.5s";
        nav.style.display = "none";}
}
    numberBar = numberBar + 1;
};

navBtn.addEventListener("mouseover", function() {
    for (let nav of navElements) {
        nav.style.animation = "fadein 0.5s";
        nav.style.display = "block";
    }
    numberBar = numberBar + 1;
});

//Number for even or odd to show/hide text because i overcomplicate things
let number = 0; // Initialize the number variable
let numberType;

function evenOrOdd() {
    if (number %2 == 0) {
        numberType = "even";
    }
    else{
        numberType = "odd";
    }
};

//Delay functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//Shows option 1 text
const why = document.getElementById("dm_one");
const whyTextElements = document.getElementsByClassName("changes_why_content");

async function showWhyText() {
    let topOffset = 65; // Initialize topOffset to 65
    for (let whyText of whyTextElements) {
            change(whyText, "absolute", "30px", "red");
            whyText.style.animation = "fadein 0.5s";
            whyText.style.display = "block";
            whyText.style.top = "40%"; // Set the initial top position to 40%
            await delay(3000); // Wait for 3 seconds before showing the next element
            change(whyText, "absolute", "20px", "blue");
            changeTop(whyText, topOffset);
            topOffset += 5; // Increment topOffset for the next element


            
    }
}
function hideWhyText() {
    for (let whyText of whyTextElements) {
        whyText.style.animation = "fadeout 0.5s";
        whyText.style.display = "none";
    }
}

why.onclick = function(){
    evenOrOdd();
    if (numberType == "even") {
        showWhyText();
    }
    else{
        hideWhyText();
    }
    number = number + 1;
}

//Shows option 2 text
const diff = document.getElementById("dm_two");
const diffTextElements = document.getElementsByClassName("sa_area_diff_content");

function showDiffText() {
    for (let diffText of diffTextElements) {
        diffText.style.animation = "fadein 0.5s";
        diffText.style.display = "block";
    }
}
function hideDiffText() {
    for (let diffText of diffTextElements) {
        diffText.style.animation = "fadeout 0.5s";
        diffText.style.display = "none";
    }
}

diff.onclick = function(){
    evenOrOdd();
    if (numberType == "even") {
        showDiffText();
    }
    else{
        hideDiffText();
    }
    number = number + 1;
}

//Shows option 3 text
const mathStuff = document.getElementById("dm_three");
const mathStuffTextElements = document.getElementsByClassName("math_involved_content");

function showMathText() {
    for (let mathStuffText of mathStuffTextElements) {
        mathStuffText.style.animation = "fadein 0.5s";
        mathStuffText.style.display = "block";
        document.getElementById("btn").style.display = "block";
        document.getElementById("inputa").style.display = "block";
        document.getElementById("input1").style.display = "block";
        document.getElementById("giveupfr").style.display = "block";
        document.getElementById("explain_btn").style.display = "block";
    }
}
function hideMathText() {
    for (let mathStuffText of mathStuffTextElements) {
        mathStuffText.style.animation = "fadeout 0.5s";
        mathStuffText.style.display = "none";
        document.getElementById("btn").style.display = "none";
        document.getElementById("inputa").style.display = "none";
        document.getElementById("input1").style.display = "none";
        document.getElementById("giveupfr").style.display = "none";
        document.getElementById("explain_btn").style.display = "none";
        document.getElementById("explain").style.display = "none";
    }
}

mathStuff.onclick = function(){
    evenOrOdd();
    if (numberType == "even") {
        showMathText();
    }
    else{
        hideMathText();
    }
    number = number + 1;
}

   /*let gaveUp = document.getElementById("help");
   let gaveUpText = document.getElementById("help_me_text");

   gaveUp.addEventListener("mouseover", function() {
    gaveUpText.style.display = "block";
   });
   gaveUp.addEventListener("mouseout", function() {
    gaveUpText.style.display = "none";
   }); 

   let gaveUp2 = document.getElementById("ex_two");
   let gaveUpText2 = document.getElementById("help_me_text2");

   gaveUp2.addEventListener("mouseover", function() {
    gaveUpText2.style.display = "block";
   });

   gaveUp2.addEventListener("mouseout", function() {
    gaveUpText2.style.display = "none";
   });

   let gaveUp3 = document.getElementById("ex_three");
   let gaveUpText3 = document.getElementById("help_me_text3");

   gaveUp3.addEventListener("mouseover", function(){
    gaveUpText3.style.display="block";
    console.log("hi");
   });
   gaveUp3.addEventListener("mouseout", function(){
    gaveUpText3.style.display="none";
   });*/


//let inputChange = 4.5;
let inputSphereRadius = 4.61;
const atrunc1bRad =  (inputSphereRadius * .5);
const atrunc1sRad = atrunc1bRad / 1.75;
const atrunc1h = atrunc1bRad * 1.2;
const atrunc2bRad =  (inputSphereRadius * .25);
const atrunc2sRad = atrunc2bRad / 1.75;
const atrunc2h = atrunc2bRad * 1.2;
console.log(atrunc1bRad, atrunc1sRad, atrunc1h, atrunc2bRad, atrunc2sRad, atrunc2h);

//Volumes
function volumeSurfaceArea(){
const sphereVol = (4/3) * 3.14 * Math.pow(inputSphereRadius, 3);
const trunc1Vol = (1/3) * Math.PI * atrunc1h * (
    Math.pow(atrunc1bRad, 2) +
    atrunc1bRad * atrunc1sRad +
    Math.pow(atrunc1sRad, 2)
);
    const trunc2Vol = (1/3) * Math.PI * atrunc2h * (
    Math.pow(atrunc2bRad, 2) +
    atrunc2bRad * atrunc2sRad +
    Math.pow(atrunc2sRad, 2)
);
    
const totalVol = sphereVol + trunc1Vol+ trunc2Vol;

//Surface Areas
let l1 = Math.sqrt(Math.pow(atrunc1sRad, 2)+Math.pow(atrunc1h, 2));
let l2 = Math.sqrt(Math.pow(atrunc2sRad, 2)+Math.pow(atrunc2h, 2));
const sphereArea = (4 * 3.14 * Math.pow(inputSphereRadius, 2));
const trunc1Area = ( 3.14 * (atrunc1bRad + atrunc1sRad) * l1 + 3.14 * (Math.pow(atrunc1bRad, 2) + Math.pow(atrunc1sRad, 2)));
const trunc2Area = ( 3.14 * (atrunc2bRad + atrunc2sRad) * l2 + 3.14 * (Math.pow(atrunc2bRad, 2) + Math.pow(atrunc2sRad, 2)));
const base1Area = Math.PI * Math.pow(atrunc1bRad, 2); // base of truncated cone 1
const base2Area = Math.PI * Math.pow(atrunc2bRad, 2); // base of truncated cone 2

// Calculate total area, excluding the big radii base areas
const totalArea = sphereArea + trunc1Area + trunc2Area - 2 * (base1Area + base2Area);
input1.innerHTML = `Area: ${totalArea.toFixed(2)}, Volume: ${totalVol.toFixed(2)}`;
}

   let inputa = document.getElementById("one_inputa");
   let input1 = document.getElementById("input1");
   let btn = document.getElementById("btn");
   
   btn.onclick = function() {
    
    let userstr = inputa.value; // get the string value from input
    let userNumb = parseFloat(userstr); // convert it to a float

    inputSphereRadius = userNumb;

    console.log("Input string:", userstr);
    console.log("Parsed number:", userNumb);

    volumeSurfaceArea();
   }

   // Execute a function when the user presses a key on the keyboard
inputa.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      
      // Trigger the button element with a click
      btn.onclick();
      }});

//Number for even or odd to show/hide extra text because i overcomplicate things
let numberExtra = 0; // Initialize the number variable
let numberTypeE;

function evenOrOddE() {
    if (numberExtra %2 == 0) {
        numberTypeE = "even";
    }
    else{
        numberTypeE = "odd";
    }
};

function showExplain(){
document.getElementById("explain").style.display = "block";
document.getElementById("explain").style.animation = "fadein 3s";
document.getElementById("picture_of_my_cat").style.opacity = "15%";
document.getElementById("dropdown_menu").style.changeBackground = "red";
document.getElementById("dropdown_menu").style.opacity = "15%";
}

function hideExplain(){
document.getElementById("explain").style.display = "none";
document.getElementById("picture_of_my_cat").style.opacity = "100%";
document.getElementById("dropdown_menu").style.opacity = "0%";
}

document.getElementById("explain_btn").onclick = function(){
evenOrOddE();
    if (numberTypeE == `odd`){
        showExplain();
    }
    if (numberTypeE == `even`){
        hideExplain();
    }
    numberExtra = numberExtra + 1;
}

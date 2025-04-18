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

//shows navigation bar

const navBtn = document.getElementById("dropdown_menu");
const navElements = document.getElementsByClassName("dm_material");

navBtn.addEventListener("mouseover", function() {
    for (let nav of navElements) {
        nav.style.animation = "fadein 0.5s";
        nav.style.display = "block";
    }
});

navBtn.onclick = function() {
    for (let nav of navElements) {
        nav.style.animation = "fadeout 0.5s";
        nav.style.display = "none";
    }
}

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
            change(whyText, "absolute", "125px", "red");
            whyText.style.animation = "fadein 0.5s";
            whyText.style.display = "block";
            whyText.style.top = "40%"; // Set the initial top position to 40%
            await delay(5000); // Wait for 5 seconds before showing the next element
            change(whyText, "absolute", "70px", "blue");
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
    }
}
function hideMathText() {
    for (let mathStuffText of mathStuffTextElements) {
        mathStuffText.style.animation = "fadeout 0.5s";
        mathStuffText.style.display = "none";
    }
}

mathStuff.onclick = function(){
    evenOrOdd();
    if (numberType == "even") {
        showMathText();
        console.log("clicked");
    }
    else{
        hideMathText();
    }
    number = number + 1;
}

   let gaveUp = document.getElementById("help");
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
   });


let inputChange = 4.5;
let inputSphereRadius = 1;
const atrunc1bRad =  ((inputChange * inputSphereRadius) /(2 * 3.14 * inputSphereRadius));
const atrunc1sRad = atrunc1bRad / 1.75;
const atrunc1h = atrunc1sRad / atrunc1bRad;
const atrunc2bRad =  ((1/2 * inputChange * inputSphereRadius) /(2 * 3.14 * inputSphereRadius));
const atrunc2sRad = atrunc2bRad / 1.75;
const atrunc2h = .5 * (atrunc2sRad / atrunc2bRad);
console.log(atrunc1bRad, atrunc1sRad, atrunc1h, atrunc2bRad, atrunc2sRad, atrunc2h);

//Volumes
function volumeSurfaceArea(){
const sphereVol = (4/3) * 3.14 * Math.pow(inputSphereRadius, 3);
const trunc1Vol = (1/3 * (atrunc1h * 3.14 * (Math.pow(atrunc1bRad, 2) + atrunc1bRad * atrunc1sRad + Math.pow(atrunc1sRad, 2))));
const trunc2Vol = (1/3 * (atrunc2h * 3.14 * (Math.pow(atrunc2bRad, 2) + atrunc2bRad * atrunc2sRad + Math.pow(atrunc2sRad, 2))));
const totalVol = sphereVol + trunc1Vol + trunc2Vol;

//Surface Areas
const sphereArea = (4 * 3.14 * Math.pow(inputSphereRadius, 2));
const trunc1Area = ( 3.14 * (atrunc1bRad + atrunc1sRad) * atrunc1h + 3.14 * (Math.pow(atrunc1bRad, 2) + Math.pow(atrunc1sRad, 2)));
const trunc2Area = ( 3.14 * (atrunc2bRad + atrunc2sRad) * atrunc2h + 3.14 * (Math.pow(atrunc2bRad, 2) + Math.pow(atrunc2sRad, 2)));
const totalArea = sphereArea + trunc1Area + trunc2Area;
input1.innerHTML = `Area: ${totalArea}, Volume: ${totalVol}`;
}

   let inputa = document.getElementById("1inputa");
   let input1 = document.getElementById("input1");
   let btn = document.getElementById("btn");
   
   btn.onclick = function() {
    input1.style.display = "block";
    
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
    }
  });
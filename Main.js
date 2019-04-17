// Select Input Field
var input = document.querySelector("#input");

// console.log(input)
// User input template option:
//<input type="number" class="form-control" name="input" id="input" placeholder="Enter Value Here...">

// Catch User Input Event
input.addEventListener("input", convert)

function convert() {
// console.log("hello from convert")

// Get Value of User Input
var value = input.value;
// console.log(value)

    // Grams
    document.querySelector("#Grams").textContent = value * 453.592;

    // Kilograms
    document.querySelector("#Kilograms").textContent = value * 453.592 / 1000;

    // Ounces
    document.querySelector("#Ounces").textContent = value * 16;

    // NFL Secrets

    // 12 lines = one inch; 12 inches = one foot; 
    // 3 feet = one yard; 36 inches = one yard;
    // 8 furlongs = one mile
    // 1760 yards = one mile; 880 yards = half mile;
    // 440 yards = quarter mile
    // 100 links = one chain
    // 10 chains = one furlong
    // 40 poles = one furlong
    // 8 furlongs = one mile
    // 4 inches = one hand
    // 4 poles = one chain
    // 22 yards = one chain
    // 5.5 yards = one pole = 1 rod = 1 perch
    // 4 poles = one chain
    // 44 yards = two chains = one field goal
    // 10 yards = one 1st down
    // 100 yards = one touchdown


    // Nails

    // Fingers

    // Spans

    // Yojana Stages

    // Dhanush Bows

    // Master Cubits

    // Common Cubits

    // Double Common Cubits

    // Half Yards

    // Palms

    // Half Cubits

    // Feet

    // Inches

    // One Twenty Fourth Cubits

    // Royal Cubits
}
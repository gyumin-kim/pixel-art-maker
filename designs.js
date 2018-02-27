/*
Defining variables with const and let
Accessing the DOM using methods of the document object
Declaring functions and attaching them to DOM objects as event listeners
Writing nested loops and using loop variables

1. Define your variables by selecting the DOM elements that the user will interact with. 
This is where your DOM skills can come into play! For instance, the submit button, the table, and the color 
picker need to be accessed. The value of the color selected needs to be stored as well, 
since the clicked cell in the table needs to be set to the selected color.

2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes 
can be dynamically set by the user.

3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. 
Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. 
Each cell should have an event listener that sets the background color of the cell to the selected color.
*/

// Define makeGrid() function
function makeGrid(event) {
    let canvas = document.getElementById('pixelCanvas');
    // Initialize Canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    };
    // Select size input
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;

    event.preventDefault();
    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let column = document.createElement('td');
            row.appendChild(column);
        }
        canvas.appendChild(row);
    }
}

// When size is submitted by the user, call makeGrid()
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', makeGrid);
let canvas = document.getElementById('pixelCanvas');
// Select color input
let cells = canvas.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
        let clickedCell = event.target;
        clickedCell.style.backgroundColor = canvasColor;
    });
}
let colorPicker = document.getElementById('colorPicker');
let canvasColor = colorPicker.value;
colorPicker.addEventListener('input', function() {
    canvasColor = colorPicker.value;
});
// canvas.addEventListener('click', function (evt) {
//     evt.target.style.backgroundcolor = canvasColor;
// }, true);
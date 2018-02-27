// Define makeGrid() function
function makeGrid(height, width) {
    // Initialize Canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    };

    // Build table
    for (let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let column = document.createElement('td');
            row.appendChild(column);
        }
        canvas.appendChild(row);
    }

    // Select color input and apply to cells
    canvas.addEventListener('click', function (event) {
        event.target.style.backgroundColor = canvasColor;
    });
}

let canvas = document.getElementById('pixelCanvas');
let colorPicker = document.getElementById('colorPicker');
let canvasColor = colorPicker.value;
colorPicker.addEventListener('input', function() {
    canvasColor = colorPicker.value;
});

// When form is submitted
document.getElementById('sizePicker').onsubmit = function() {
    event.preventDefault();

    // Select size input
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
}
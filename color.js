var colors;
var numsquares = 6;
var pickedColor;

//HTML Selectors
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById('colorDisplay')
var msg = document.querySelector('#message')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var mode = document.querySelectorAll('.mode')



init()


function init() {

    modeReset()
    setupSquares()
    reset();
}

function modeReset() {
    //Mode buttons
    for (i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove('selected')
            mode[1].classList.remove('selected')
            this.classList.add("selected")
            this.textContent === "Easy" ? numsquares = 3 : numsquares = 6;
            reset()

        })

    }


}


function setupSquares() {

    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                msg.textContent = "Correct"
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor)
                h1.style.backgroundColor = clickedColor
            } else {
                this.style.backgroundColor = "black";
                msg.textContent = "Try Again"

            }
        });
    }

}

//Reset function 
function reset() {
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors'
    console.log(colors, pickedColor)
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = 'rgb(44, 18, 214)';
    msg.textContent = ""

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }

}



resetButton.addEventListener("click", function () {
    reset();
});





function changeColor(colour) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;

    }
}


//FUnction to pick a random Color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    console.log(random)
    return colors[random];
}


//Function to create the color array 
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {

        arr.push(randomColor());

    }
    return arr;
}


//Function to generate random colors
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
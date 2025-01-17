const btn = document.querySelectorAll('button');
const round = document.querySelector('.round');
const shape = document.querySelector('#square');
console.log(btn[0]);
// const 

btn[0].addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  round.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change the shape

btn[1].addEventListener('click', changeShape);
console.log();
let shapes = ['circle', 'square', 'triangle','rightChevron','cross','rhombos','trapezoid','parrelogram','pentagon','hexagon'];
function randomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}
function changeShape() {
    let idNames = randomShape();
    console.log(idNames);
    shape.id = idNames;
    console.log(shape);
}


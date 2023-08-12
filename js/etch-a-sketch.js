const container =  document.querySelector('.grid-container');
const generateGridBtn = document.querySelector('.generate-grid-btn');
const clearGridBtn = document.querySelector('.clear-grid-btn');
const randomColorBtn = document.querySelector('.rand-color-btn');


generateGridBtn.addEventListener('click', () => {
    const userInputNum = prompt("Enter the grid size: ");

    while (userInputNum > 100) {
        userInputNum = prompt("Number can't be greater than 100, try again: ")
    }
    generateGrid(userInputNum);
});

clearGridBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {item.style.backgroundColor = '';});
});

randomColorBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {item.addEventListener('mouseover',(e) => {
        let color = generateRandomColor();
        console.log(color),
        e.target.style.backgroundColor = color;
    });})
});

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}

function generateGrid(size=16) {
    const containerSize = 530;
    const boxSize = containerSize / size;
    const divCount = size * size;
    resetGrid();
    for (let i = 0; i < divCount; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style = `width: ${boxSize}px; height: ${boxSize}px;`;
        div.addEventListener('mouseover',(e) => {
            if (div.classList.contains('rand-color')){
                let color = generateRandomColor();
                console.log(color),
                e.target.style.backgroundColor = color;
            }
           e.target.style.backgroundColor = 'black';
        });
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}


function resetGrid() {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach((div) => {div.remove()});
}

generateGrid();
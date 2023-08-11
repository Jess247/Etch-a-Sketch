const container =  document.querySelector('.container');
const generateGridBtn = document.querySelector('.generate-grid-btn');
const clearGridBtn = document.querySelector('.clear-grid-btn');

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
           e.target.style.backgroundColor = 'pink';
        });
        // div.addEventListener('mouseout',(e) => {
        //     e.target.style.backgroundColor = '';
        //  });
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}


function resetGrid() {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach((div) => {div.remove()});
}

generateGrid();
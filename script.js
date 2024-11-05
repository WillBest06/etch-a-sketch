const canvas = document.querySelector('.canvas');
const main = document.querySelector('.main');
const controlsPanel = document.querySelector('.controls-panel');
let gridSize = 16;
let mouseHeldDown = false;

const changeGridSizeBtn = document.createElement('button');
changeGridSizeBtn.textContent = 'Change grid size';
changeGridSizeBtn.className = 'controls';
controlsPanel.appendChild(changeGridSizeBtn);

const gridSizeInfo = document.createElement('p');
gridSizeInfo.className = 'controls';
controlsPanel.appendChild(gridSizeInfo);
function drawGrid(squaresPerSide) {
    numberOfSquares = squaresPerSide * squaresPerSide;

    for (i = 0; i < numberOfSquares; i++) {
        const div = document.createElement('div');
        const divID = 'div' + (i + 1);
        div.id = divID;
        div.className = 'grid-box';
        div.style.flex = `${(100 / gridSize)}%`;
        canvas.appendChild(div);
        gridSizeInfo.textContent = `Grid size: ${gridSize} x ${gridSize}`;
    }
}

drawGrid(gridSize); 

canvas.addEventListener('click', (e) =>{
    const box = e.target;
    if (box.className == 'grid-box') {
        box.style.backgroundColor = 'black';
    }
})

canvas.addEventListener('mousedown', (e) => {
    mouseHeldDown = true;
})

canvas.addEventListener('mouseup', (e) => {
    mouseHeldDown = false;
})

canvas.addEventListener('mouseover', (e) =>{
    const box = e.target;
    if (box.className == 'grid-box' && mouseHeldDown == true) {
        box.style.backgroundColor = 'black';
    }
})

changeGridSizeBtn.addEventListener('click', () => {
   gridSize = prompt('How many boxes would you like the grid to be?');
   if (gridSize > 100) {
        gridSize = 100;
   } else if (gridSize < 1) {
        gridSize = 1;
   }
   
    clearGrid();
    drawGrid(gridSize);
})

function clearGrid () {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}
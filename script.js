const flexContainer = document.querySelector('.container');


// const button = document.createElement('button');
// button.textContent = 'Click me to change the grid size';
// document.appendChild(button);

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    const divID = 'div' + (i + 1);
    div.id = divID;
    div.className = 'grid-box';
    flexContainer.appendChild(div);
}

flexContainer.addEventListener('mouseover', (e) =>{
    const box = e.target;
    box.style.backgroundColor = 'black';
})
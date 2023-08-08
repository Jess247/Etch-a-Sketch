const container =  document.querySelector('.container');
// create 16 x 16 gird of divs
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover',(e) => {
       e.target.style.backgroundColor = 'pink';
    });
    div.addEventListener('mouseout',(e) => {
        e.target.style.backgroundColor = '';
     });
    div.classList.add('grid-item');
    container.appendChild(div);
}

document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.classList.add('red');
    }
})

const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const elem = document.createElement('div');
        elem.textContent = i * 4 + j;
        elem.classList.add('item');
        container.appendChild(elem);
    }
}
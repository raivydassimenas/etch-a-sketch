const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const elem = document.createElement('div');
        elem.classList.add('item');
        elem.textContent = i * 4 + j;
        container.appendChild(elem);
    }
}
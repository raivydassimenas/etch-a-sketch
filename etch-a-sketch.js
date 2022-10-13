document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.classList.add('red');
    }
});

const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const elem = document.createElement('div');
        elem.textContent = i * 4 + j;
        elem.classList.add('item');
        container.appendChild(elem);
    }
}

const sizeButton = document.querySelector('.size-button');

sizeButton.addEventListener('click', (e) => {
    let size = parseInt(prompt("What should the side size be? (1 to 100)"));
    while (size < 1 || size > 100) {
        size = parseInt(prompt("What should the side size be? (1 to 100)"));
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
});
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.classList.add('red');
    }
});

const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const elem = document.createElement('div');
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
    const length = 800 / size;
    container.style.gridTemplateColumns = `repeat(${size}, ${length}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${length}px`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const elem = document.createElement('div');
            elem.classList.add('item');
            container.appendChild(elem);
        }
    }
});
function createGrid(rows, columns) {
    const container = document.querySelector("#container");

    
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    }
}

function selectGridSize() {
    let choice = prompt('Please choose size for the grid (e.g. 16):');
    let size = parseInt(choice);

    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size, size);
}

const mybutton = document.querySelector('#btn');

mybutton.addEventListener("click", () => {
    selectGridSize();
});

function createGrid(rows, colums){
    const content = document.querySelector("#container");

    for (let i = 0; i < (rows * colums); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(16, 16);
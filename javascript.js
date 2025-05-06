function createGrid(rows, colums){
    const content = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(${colums}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < (rows * colums); i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    

        square.addEventListener(
            "mouseover",
            (event) => {
                event.target.style.backgroundColor = "black";
            },
        );
    }
}
createGrid(16, 16);

const mybutton = document.querySelector('#btn');

mybutton.addEventListener("click", () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});
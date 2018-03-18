
const mineField = document.getElementById("board");

//create grid
var grid = {

    height: 5,
    width: 5,

    numberOfMines: 3,
    minePositionsX: [0],
    minePositionsY: [0],
    minePosition: [0],

    generateGrid: function () {
        for (let i = 0; i < this.height; i++) {
            let mineFieldRow = document.createElement("div");
            mineFieldRow.setAttribute("class", "row");
            for (let j = 0; j < this.width; j++) {
                let square = document.createElement("div");
                square.setAttribute("class", "square");
                mineFieldRow.appendChild(square);
            }
            mineField.appendChild(mineFieldRow);
        }

    },


    // Randomly assign mines to the mineField. Do not allow duplicates.
    generateMines: function () {

        for (k = 0; k <= this.numberOfMines; k++) {
            
            let y = Math.floor((Math.random() * this.height) + 1);
            let x = Math.floor((Math.random() * this.width) + 1);
            console.log(x + " : " + y);

            let randomPosition = ("" + x + "-" + y);
            console.log(randomPosition);
            
                if (this.minePosition.includes('randomPosition')) {
                    return;
                } else {
                    console.log("*" + randomPosition);
                    this.minePositionsY.push(y);
                    this.minePositionsX.push(x);
                    this.minePosition.push(randomPosition);
                }

            // }
        }
        console.log("grid.minePositionsX: " + grid.minePositionsX);
        console.log("grid.minePositionsY: " + grid.minePositionsY);
        console.log("grid.minePosition: " + grid.minePosition);
    }

};


grid.generateGrid();
grid.generateMines();
// console.log(grid.generateGrid());
// console.log(mineField);
// console.log(grid.height);
// console.log(grid.numberOfMines); 
// console.log("grid.minePositionsX" + grid.minePositionsX);
// console.log("grid.minePositionsY" + grid.minePositionsY);
// console.log("grid.minePosition" + grid.minePosition);







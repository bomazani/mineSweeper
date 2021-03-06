
const mineField = document.getElementById("board");

//create grid
var grid = {

    height: 5,
    width: 5,
    total: this.height * this.width,
    // numberOfMines: (Math.floor((this.height * this.width) * .15)),
    // numberOfMines: (this.total * 0.15),
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

        for (k = 0; k <= this.numberOfMines-1; k++) {
            
            let y = Math.floor((Math.random() * this.height) + 1);
            let x = Math.floor((Math.random() * this.width) + 1);
            // console.log(x + " : " + y);

            let randomPosition = ("" + x + "-" + y);
            // console.log(randomPosition);
            console.log(this.numberOfMines);

                if (this.minePosition.includes('randomPosition')) {
                    return;
                } else {
                    // if (this.minePosition[0] == 0){
                    //     this.minePosition.splice(0,1,randomPosition)
                    // }
                    switch (this.minePosition[0]) {
                        
                        case 0:
                            this.minePosition.splice(0,1,randomPosition)
                            this.minePositionsY.splice(0,1,y)
                            this.minePositionsX.splice(0,1,x)
                            break;

                        default: 
                            this.minePositionsY.push(y)
                            this.minePositionsX.push(x)
                            this.minePosition.push(randomPosition)

                    }
                    // console.log("*" + randomPosition);
                    // this.minePositionsY.push(y);
                    // this.minePositionsX.push(x);
                    // this.minePosition.push(randomPosition);
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

// console.log(mineField);
// console.log(grid.height);
// console.log(grid.numberOfMines); 
// console.log("grid.minePositionsX" + grid.minePositionsX);
// console.log("grid.minePositionsY" + grid.minePositionsY);
// console.log("grid.minePosition" + grid.minePosition);







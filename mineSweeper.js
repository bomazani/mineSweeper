
const mineField=document.getElementById("board"); 

//create grid
var grid= {

    height: 5,
    width: 5,

    numberOfMines: 3,
    minePositionsX: [],
    minePositionsY:[],
    minePosition: [],

    generateGrid: function() {
        for (let i = 0; i < this.height; i++) {
            let mineFieldRow = document.createElement("div");
            mineFieldRow.setAttribute("class","row");
                for (let j = 0; j < this.width; j++) {
                    let square = document.createElement("div");
                    square.setAttribute("class","square");
                    mineFieldRow.appendChild(square);
                }
            mineField.appendChild(mineFieldRow);
        }
        
    },


    // Randomly assign mines to the mineField. Do not allow duplicates.
    generateMines: function () {
     
        for (k = 0; k <= this.numberOfMines; k++) {
            // minePositionsY = Math.floor((Math.random() * height)+1);
            // minePositionsX = Math.floor((Math.random() * width)+1);
            let y = Math.floor((Math.random() * this.height)+1);
            let x = Math.floor((Math.random() * this.width)+1);
            let randomPosition = ("" + x + "-" + y);
                for(l=0; l<)
                if (randomPosition === )

                this.minePositionsX.push(y);
                this.minePositionsX.push(x);
                this.minePosition.push(randomPosition);
                console.log(minePosition); 

            
        }
        
    }
    
};

grid.generateGrid();
grid.generateMines();
// console.log(grid.generateGrid());
// console.log(mineField);
// console.log(grid.height);
// console.log(grid.numberOfMines); 
console.log(grid.minePositionsX);
console.log(grid.minePositionsX);
     


    
    
       

var game = {

    cellWidth: 50,
    tableau: document.querySelector('.terrain_de_jeu'),
    types: {
        'x': 'classic', /// Un ENFEEEEER cet exo
        '*': 'wall',
        'o': 'burger',
        '-': 'goal'
    },

    init: function(){
       game.displayGrid();
    },

    displayGrid : function() {
        let countCell = 01;

        for(let i = 0; i < 5; i++) {
            const headerRow = document.createElement('section');
            headerRow.classList.add('row');

        for( let i = 0; i < 13; i++ ) {
            const currentColumn = document.createElement('div');
            currentColumn.classList.add('square');
            currentColumn.id = ('cell' + countCell);
            countCell++;
            currentColumn.textContent = game.tableau[i]; 
            headerRow.appendChild(currentColumn);
        }

        const headerRow2 = document.createElement('section');
        headerRow2.classList.add('row2');

        for( let i = 0; i < 13; i++ ) {
            const currentColumn = document.createElement('div');
            currentColumn.classList.add('square');
            currentColumn.id = ('cell' + countCell);  
            countCell++;
            currentColumn.textContent = game.tableau[i];

            headerRow2.appendChild(currentColumn);
        }
        game.tableau.appendChild(headerRow);
        game.tableau.appendChild(headerRow2);
        }

        let countCellTab = 0;
        for(let row of model) {
            for(let cellTab = 0; cellTab < 13; cellTab++) {
                countCellTab++;

                currentCell = document.querySelector('#cell' + countCellTab);
                currentCell.addEventListener('click', game.moveBurger);

                if(row[cellTab] == '*') {
                    currentCell = document.querySelector("#cell" + countCellTab)
                    currentCell.classList.add('wall');
                }

                else if(row[cellTab] == 'o') {
                    currentCell = document.querySelector("#cell" + countCellTab)
                    currentCell.classList.add('burger');
                }

                else if(row[cellTab] == '-') {
                    currentCell = document.querySelector("#cell" + countCellTab)
                    currentCell.classList.add('goal');
                }
            }
       }
    },

    moveBurger : function(evt) {
        console.log("work");
    }
};


document.addEventListener('DOMContentLoaded', game.init);

var model = [
    'xxxxxxxxx**xx',
    'x********xx-x',
    'xxxxxxxx*x**x',
    'xx*****xxx*x*',
    'xxxxxx*x***x*',
    '****xx*x*xxx*',
    'xxx*xx*x*xxxx',
    'x*o*xx**xx*xx',
    'x***xxxxxx*xx',
    'xxxxxx*****xx',
];
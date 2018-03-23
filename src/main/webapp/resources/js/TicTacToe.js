window.onload = function () {

    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';

    }

    var count = 0;

    document.getElementById('game').onclick = function (e) {

        console.log(e);
        var symbol = '0';
        if (e.target.className !== 'block') {
        } else {
            e.target.innerHTML = symbol;
            e.target.className = 'block';
            makeRandomStep();
            checkWin('0');
            checkWin('x');
            checkWin("draw!");
            if (count > 4)
                checkWin();
        }
    };
    function checkWin(s) {
        console.log(s);
        var allblock = document.getElementsByClassName('block');
        console.log(allblock);
        for (var i = 0; i < 9; i = i + 3) {
            if (allblock[i].innerHTML === s && allblock[i + 1].innerHTML === s && allblock[i + 2].innerHTML === s) {
                alert('Winner "' + s + '"');
            }
        }

            for (i = 0; i < 3; i++) {
                if (allblock[i].innerHTML === s && allblock[i + 3].innerHTML === s && allblock[i + 6].innerHTML === s) {
                    alert('Winner "' + s + '"');
                }
            }

                //diagonal
                if (allblock[0].innerHTML === s && allblock[4].innerHTML === s && allblock[8].innerHTML === s) {
                    alert('Winner "' + s + '"');
                }
                //reverse diagonal
                if (allblock[2].innerHTML === s && allblock[4].innerHTML === s && allblock[6].innerHTML === s) {
                    alert('Winner "' + s + '"');
                }
            }
            if (count > 9) {
                alert("draw!");
            }






    function makeRandomStep() {
        var cells = document.getElementById('game').getElementsByClassName('block');
        var emptyCells = [];
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].innerText === "") {
                console.log("empty cell id :" + i);
                emptyCells.push(i);
            }

        }
        var random = Math.floor(Math.random() * (emptyCells.length));
        cells[emptyCells[random]].innerHTML = "x";
    }
};



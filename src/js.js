window.onload = function() {


    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';

    }

    var count = 0;


    document.getElementById('game').onclick = function (e) {

        console.log(e);
        var symbol = '0';
        if (e.target.className !== 'block') {
        } else {
            if (count % 2 === 0)
                symbol = '0';
            else
                symbol = 'x';


            e.target.innerHTML = symbol;
            e.target.className = 'block';
            count++;
            if (count > 4)
                checkWin(symbol);


        }
    }

    function checkWin(s) {
        makeRandomStep();
        checkDraw(s);

        console.log(s);
        var allblock = document.getElementsByClassName('block');
        console.log(allblock);
        for (var i = 0; i < 9; i = i + 3) {
            if (allblock[i].innerHTML === s && allblock[i + 1].innerHTML === s && allblock[i + 2].innerHTML === s)
                alert('Winner "' + s + '"');
            return true;
        }
        for (i = 0; i < 3; i++) {
            if (allblock[i].innerHTML === s && allblock[i + 3].innerHTML === s && allblock[i + 6].innerHTML === s)
                alert('Winner "' + s + '"');
            return true;
        }
        //diagonal
        if (allblock[0].innerHTML === s && allblock[4].innerHTML === s && allblock[8].innerHTML === s)
            alert('Winner "' + s + '"');
        return true;
        //reverse diagonal
        if (allblock[2].innerHTML === s && allblock[4].innerHTML === s && allblock[6].innerHTML === s)
            alert('Winner "' + s + '"');
        //return true;

    }



    function checkDraw() {
        if (count == 9)
            alert('draw!');
        return false;

    }

    function makeRandomStep() {

        var cells = document.getElementById("game").getElementsByTagName("block");
        var emptyCells = [];
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].innerText === "") {
                console.log("empty cell id :" + i);
                emptyCells.push(i);
            }

        }
        random = Math.floor(Math.random() * (emptyCells.length));
        cells[emptyCells[random]].innerHTML = "s";
    }
}

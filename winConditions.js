document.addEventListener('click', vitoria);
let wins1 = 0;
let wins2 = 0;

function vitoria() {
    winCondition();
    if (win && actualPlayer === 'player2') {
        let player = document.getElementById('player1').innerText;
        document.getElementById('vitoria').style.display = 'block';
        document.getElementById('player').innerHTML = `Parabéns ${player}!Você ganhou!`;
        wins1++;
        document.getElementById('disc1').innerHTML = wins1;
        document.getElementById('headerCard').style.background = 'linear-gradient(to right, rgba(253, 83, 109, 1) 0%, rgba(255, 161, 109, 1) 100%)';


    } else if (win && actualPlayer === 'player1') {
        let player = document.getElementById('player2').innerText;
        document.getElementById('vitoria').style.display = 'block';
        document.getElementById('player').innerHTML = `Parabéns ${player}!Você ganhou!`;
        wins2++;
        document.getElementById('disc2').innerHTML = wins2;
        document.getElementById('headerCard').style.background = 'linear-gradient(to right, rgba(135, 77, 255, 1) 0%, rgba(255, 158, 255, 1) 100%)';
    } else if (isDraw) {
        document.getElementById('vitoria').style.display = 'block';
        document.getElementById('player').innerHTML = `Empate!!!`;
    }
}

document.getElementById('vitoria').addEventListener('click', () => {
    document.getElementById('vitoria').style.display = 'none';
    reset();
});

function winCondition() {
    winRow();
    winCol();
    winDiagonalRight();
    winDiagonalLeft();
    draw();
}

function winRow() {
    if (actualPlayer === 'player2') {
        for (let i = 0; i < positionsPlayer1.length; i++) {
            let pos = Number(positionsPlayer1[i]);
            if (positionsPlayer1.includes(String(pos + 1))) {
                pos++;
                if (positionsPlayer1.includes(String(pos + 1))) {
                    pos++;
                    if (positionsPlayer1.includes(String(pos + 1))) {
                        win = true;
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < positionsPlayer2.length; i++) {
            let pos = Number(positionsPlayer2[i]);
            if (positionsPlayer2.includes(String(pos + 1))) {
                pos++;
                if (positionsPlayer2.includes(String(pos + 1))) {
                    pos++;
                    if (positionsPlayer2.includes(String(pos + 1))) {
                        win = true;
                    }
                }
            }
        }
    }
}

function winCol() {
    if (actualPlayer === 'player2') {
        for (let i = 0; i < positionsPlayer1.length; i++) {
            let pos = Number(positionsPlayer1[i]);
            if (positionsPlayer1.includes(String(pos + 10))) {
                pos += 10;
                if (positionsPlayer1.includes(String(pos + 10))) {
                    pos += 10;
                    if (positionsPlayer1.includes(String(pos + 10))) {
                        win = true;
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < positionsPlayer2.length; i++) {
            let pos = Number(positionsPlayer2[i]);
            if (positionsPlayer2.includes(String(pos + 10))) {
                pos += 10;
                if (positionsPlayer2.includes(String(pos + 10))) {
                    pos += 10;
                    if (positionsPlayer2.includes(String(pos + 10))) {
                        win = true;
                    }
                }
            }
        }
    }
}

function winDiagonalRight() {
    if (actualPlayer === 'player2') {
        for (let i = 0; i < positionsPlayer1.length; i++) {
            let pos = Number(positionsPlayer1[i]);
            if (positionsPlayer1.includes(String(pos + 11))) {
                pos += 11;
                if (positionsPlayer1.includes(String(pos + 11))) {
                    pos += 11;
                    if (positionsPlayer1.includes(String(pos + 11))) {
                        win = true;
                    }
                }
            }
        }

    } else {
        for (let i = 0; i < positionsPlayer2.length; i++) {
            let pos = Number(positionsPlayer2[i]);
            if (positionsPlayer2.includes(String(pos + 11))) {
                pos += 11;
                if (positionsPlayer2.includes(String(pos + 11))) {
                    pos += 11;
                    if (positionsPlayer2.includes(String(pos + 11))) {
                        win = true;
                    }
                }
            }
        }
    }
}

function winDiagonalLeft() {
    if (actualPlayer === 'player2') {
        for (let i = 0; i < positionsPlayer1.length; i++) {
            let pos = Number(positionsPlayer1[i]);
            if (positionsPlayer1.includes(String(pos + 9))) {
                pos += 9;
                if (positionsPlayer1.includes(String(pos + 9))) {
                    pos += 9;
                    if (positionsPlayer1.includes(String(pos + 9))) {
                        win = true;
                    }
                }
            }
        }

    } else {
        for (let i = 0; i < positionsPlayer2.length; i++) {
            let pos = Number(positionsPlayer2[i]);
            if (positionsPlayer2.includes(String(pos + 9))) {
                pos += 9;
                if (positionsPlayer2.includes(String(pos + 9))) {
                    pos += 9;
                    if (positionsPlayer2.includes(String(pos + 9))) {
                        win = true;
                    }
                }
            }
        }
    }
}

function draw() {
    if (positionsPlayer2.length === 21) {
        isDraw = true;
    }
}
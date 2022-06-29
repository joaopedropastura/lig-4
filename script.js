//Cria a tabela e índice das células
function criarColunas() {
    let tableDiv = document.getElementById('table');

    for (let i = 1; i <= 7; i++) {
        let divColumn = document.createElement('div');
        divColumn.className = 'colunas';
        divColumn.addEventListener('click', jogabilidade);
        tableDiv.appendChild(divColumn);
        for (let j = 1; j <= 6; j++) {
            let divCell = document.createElement('div');
            divCell.className = 'celulas';
            divCell.dataset.col = i
            divCell.dataset.row = j
            divColumn.appendChild(divCell);
        }
    }
}
criarColunas();


let actualPlayer = 'player1';
let nextPlayer = ''

let col = 0;

//JOGABILIDADE
function jogabilidade(event) {
    let colunaSelecionada = event.currentTarget
        //pega o numero da coluna clicada e grava em col
    col = parseInt(colunaSelecionada.firstChild.getAttribute('data-col'));

}

let colunas = document.getElementsByClassName('colunas');
let table = document.getElementById('table');
let positionsPlayer1 = [];
let positionsPlayer2 = [];
let colPai;
let win = false;
let isDraw = false;

function placePlayer(div) {
    if (col !== 0 && col < 8) {
        let filhos = colunas[col - 1].children;
        for (let i = 0; i < filhos.length; i++) {
            if (!filhos[i].hasChildNodes()) {
                filhos[i].appendChild(div);
                if (actualPlayer === 'player1') {
                    colPai = filhos[i];
                    let row = colPai.dataset.row;
                    let col = colPai.dataset.col;
                    positionsPlayer1.push(row + col);
                    alternarPlayers();
                    break;
                } else {
                    colPai = filhos[i];
                    let row = colPai.dataset.row;
                    let col = colPai.dataset.col;
                    positionsPlayer2.push(row + col);
                    alternarPlayers();
                    break;
                }
            }
        }
    }
    col = 0;
}

document.body.addEventListener('click', () => {
    winCondition();
})

function criarPlayer() {
    if (!win) {
        let div = document.createElement("div");
        div.classList.add('player');
        div.classList.add(actualPlayer);
        placePlayer(div);
    }

}
table.addEventListener('click', () => {
    vitoria();
    criarPlayer();
    arrowPlayerSelector()
});


function alternarPlayers() {
    //alternar players
    if (actualPlayer === 'player1') {
        actualPlayer = 'player2'
    } else {
        actualPlayer = 'player1'
    }
}

function arrowPlayerSelector() {
    //seta idicadora do proximo player
    let arrowId = document.getElementById("animation3");

    if (actualPlayer === 'player1') {
        arrowId.checked = false
    } else if (actualPlayer === 'player2') {
        arrowId.checked = true
    }
}
let clickedPlayer = '';
document.addEventListener('click', () => {
    if (event.target.id === "player1" || event.target.id === "player2") {
        clickedPlayer = event.target.id
    }
});

let nameButton = document.getElementById("changeName");
nameButton.addEventListener('click', newName)

function newName() {
    if (clickedPlayer === "player1") {

        let search = document.getElementById("valueName").value;
        if (search === '' || search === ' ') {
            search = 'Player1'
        }
        let namePlayer1 = document.getElementById("player1");
        namePlayer1.innerHTML = search
        document.getElementById("valueName").value = ''
    } else if (clickedPlayer === "player2") {

        let search = document.getElementById("valueName").value;
        if (search === '' || search === ' ') {
            search = 'Player2'
        }
        let namePlayer2 = document.getElementById("player2");
        namePlayer2.innerHTML = search
        document.getElementById("valueName").value = ''
    }
}

function reset() {
    for (let i = 0; i < colunas.length; i++) {
        for (let j = 0; j < colunas[i].children.length; j++) {
            if (colunas[i].children[j].hasChildNodes()) {
                colunas[i].children[j].removeChild(colunas[i].children[j].firstChild)
            }
        }
    }
    win = false;
    positionsPlayer2 = [];
    positionsPlayer1 = [];
}
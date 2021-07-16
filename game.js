// Iniciar as minhas variáveis

/* Criar um array para reprensentar ESCUDO, ESPADAS e VAZIO.
ao clicar no quadro aparece escudo e no próximo espada.
vai ter 9 posições no array, uma para cada square, começando vazio
*/

let board = ["", "", "", "", "", "", "", "", ""]
// Vez do jogador
let playerTime = 0
// Simbolos (escudo e espada)
// se a vez do jogador for 0 eu vou por "o" e se for 1 vai ser "x"
let symbols = ["o", "x"]

let gameOver = false


// Aqui é a function para por um escudo ou espadas no square
function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime]

        gameOver = isWin()

        if (gameOver == false) {
            // para passar a vez para o proximo player
            if (playerTime == 0) {
                playerTime = 1
            } else {
                playerTime = 0
            }
        }
    }
    return gameOver
}


function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != "") {
            return true
        }
    }
    return false
}

/* Criar uma função que reconheça que usuário clicou no square
para disparar um evento (aparecer o escudo)
*/

// este evento será executado quando o documento for carregado e vai excutar uma funcção
document.addEventListener("DOMContentLoaded", () => {
    // pegar todos os elementos square
    let squares = document.querySelectorAll(".square")
    // para cada square vou add um evento click com uma função chamda handleClick
    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})
// função handleClick associada ao square.addEventListener("click", handleClick)
function handleClick(Event) {
    // esse let square vai por o elemento dentro do square
    let square = Event.target
    /* esse let position vai ser o ID do player Time que será 
    passado la pro handleMovie do game.js  */
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert("Player " + playerTime + " wins!")
        }, 10)
    }
    // updateSquares é uma function para por na square os symbols
    updateSquares()

}

function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbols = board[position]

        if (symbols != "") {
            square.innerHTML = `<div class="${symbols}"></div>`
        }

    })

}
import Modal from "./modal.js"

const modal = Modal()

// Pegar todos os butões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Adicionar o ouvidor de eventos para todos os botões com a classe check
checkButtons.forEach(button => {

    // Adicionar a escuta
    button.addEventListener("click", event => {
        // Abrir modal
        modal.open()
    })
})

// Pegar todos os butões que existe com a classe delete
const deleteButton = document.querySelectorAll(".actions a.delete")

// Adicionar o ouvidor de eventos para todos os botões com a classe delete
deleteButton.forEach(button => {

    // Adicionar a escuta
    button.addEventListener("click", event => {
        // Abrir modal
        modal.open()
    })
})

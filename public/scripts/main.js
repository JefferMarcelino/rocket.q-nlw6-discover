import Modal from "./modal.js"

const modal = Modal()
const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

// Pegar todos os butões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// Adicionar o ouvidor de eventos para todos os botões com a classe check
checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Pegar todos os butões que existe com a classe delete
const deleteButton = document.querySelectorAll(".actions a.delete")

// Adicionar o ouvidor de eventos para todos os botões com a classe delete
deleteButton.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", event => handleClick(event, false))
})

function handleClick(event, check = true) {
    // reseta o comportamento dos links
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML =  `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // Abrir modal
    modal.open()
}
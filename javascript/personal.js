const modal = document.getElementsByClassName("modal")[0];
const openModalButton = document.getElementsByClassName("open-modal")[0];
const closeModalButton = document.getElementsByClassName("close-modal-button")[0];
const seeProjectButton = document.getElementsByClassName("see-project-button")[0];

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
})

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
})

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

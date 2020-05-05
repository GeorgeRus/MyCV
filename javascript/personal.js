/*defining variables*/ 
const modal = document.getElementsByClassName("modal");
const openModalButton = document.getElementsByClassName("open-modal");
const closeModalButton = document.getElementsByClassName("close-modal-button");
const seeProjectButton = document.getElementsByClassName("see-project-button");
const interests = document.getElementsByClassName("interests")[0];
const myInterests = interests.getElementsByTagName("div");
const interestsTitle = document.getElementsByClassName("interests-title")[0];

const openModalButtons = [...openModalButton];
openModalButtons.forEach((openButton, index) => openButton.addEventListener("click", () => {
    [...modal][index].style.display = "block";
    const jsPic = document.getElementById("js-picture");
    jsPic.classList.add("modal-above");
}));

const closeModalButtons = [...closeModalButton];
closeModalButtons.forEach((closeButton, index) => closeButton.addEventListener("click", () =>{
    [...modal][index].style.display = "none";
}))

window.onclick = () => {
    [...modal].forEach(modalItem => modalItem.addEventListener("click", () =>{
        modalItem.style.display = "none";
}))}

//set random color when the mouse is over a div
[...myInterests].forEach(interes => interes.addEventListener("mouseover", () =>{
    const colorsToSet = ["#574444 ", "#7B0A0A", "#FF4F23", "#EA3DD5", "#8085F0", "#581845", "#000000", "#192B19", "#24295A", "#CF6DDA"];
    const setRandomColor = () => {
        randomIndex = Math.floor(Math.random() * colorsToSet.length);
        return colorsToSet[randomIndex];
    }
    interes.style.backgroundColor = setRandomColor();
    interestsTitle.style.fontSize = "2.5rem";
    interestsTitle.style.color = setRandomColor();
}));

[...myInterests].forEach(interes => interes.addEventListener("mouseleave", () =>{
    interes.style.backgroundColor = "grey";
    interestsTitle.style.color = "black";
}))

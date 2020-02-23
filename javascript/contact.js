const formElement = document.getElementsByClassName("form-element")[0];
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitMessage = document.getElementsByClassName("submit-message")[0];
const submitButton = document.getElementById("submit-btn");
const URL = "https://formspree.io/xrgbelll";

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(!firstName.value || !lastName.value || !email.value || !message.value){
        submitMessage.classList.remove("submit-message");
        submitMessage.classList.add("show");
        submitMessage.innerHTML = "All fields must be completed!"
    }else{
        submitMessage.classList.add("show");
        submitMessage.innerHTML = "Your message was sent!"
        submitMessage.style.color = "green";
    }
})


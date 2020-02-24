const formElement = document.getElementsByClassName("form-element")[0];
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitMessage = document.getElementsByClassName("submit-result-message")[0];
const submitButton = document.getElementById("submit-btn");
const URL = "https://formspree.io/xrgbelll";

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(!firstName.value || !lastName.value || !email.value || !message.value){
        displaySubmitErrorMessage();
    }else{
        displaySubmitSuccsesMessage();
    }

    let userData = {
        userFirstName : firstName.value,
        userLastName : lastName.value,
        userEmail : email.value,
        userMessage : message.value
    }

    sendEmail(URL, userData);
})

function sendEmail(URL, userData){
    const obj = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(userData)
    }

    fetch(URL, obj).then(response => response.json())
    clearFields();
}

function displaySubmitErrorMessage(){
    submitMessage.classList.remove("hide-message");
    submitMessage.classList.add("show-dubmit-message");
    submitMessage.innerHTML = "All fields must be completed!"
}

function displaySubmitSuccsesMessage(){
    submitMessage.classList.add("show-submit-message");
    submitMessage.innerHTML = "Your message was sent!"
    submitMessage.style.color = "green";
}

function clearFields(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
}
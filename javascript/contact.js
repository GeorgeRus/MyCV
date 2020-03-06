const formElement = document.getElementsByClassName("form-element")[0];
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitMessage = document.getElementsByClassName("submit-result-message")[0];
const submitButton = document.getElementById("submit-btn");
const contactItems = document.getElementsByClassName("contact-forms")[0];
const URL = "https://formspree.io/xrgbelll";

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if(!firstName.value || !lastName.value || !email.value || !message.value){
        displaySubmitErrorMessage();
        setTimeout(removeMessage, 3000);
    }else{
        displaySubmitSuccsesMessage();
        setTimeout(removeMessage, 3000);
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
    submitMessage.classList.add("show-submit-message");
    submitMessage.innerHTML = "All fields must be completed!"
    //contactItems.style.height = "480.6px";
}

function displaySubmitSuccsesMessage(){
    submitMessage.classList.add("show-submit-message");
    submitMessage.innerHTML = "Your message was sent!"
    submitMessage.style.color = "green";
    //contactItems.style.height = "480.6px";
}

function clearFields(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
}

function removeMessage(){
    submitMessage.classList.add("hide-message");
    // if(formElement.clientHeight < 480.6){
    //     contactItems.style.height = "42rem";
    // }else{
    //     contactItems.style.height = "";
    // }
}


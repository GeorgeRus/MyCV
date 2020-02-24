const showContacts = document.getElementsByClassName("contacts")[0];
const contacts = document.getElementsByClassName("contact")[0];

showContacts.addEventListener("click", () => contacts.style.visibility = "visible");
//show contacts
const showContacts = document.getElementsByClassName("contacts")[0];
const contacts = document.getElementsByClassName("contact")[0];
showContacts.addEventListener("click", () => contacts.style.visibility = "visible");

//type effect
const interest = document.getElementsByClassName("interest")[0];
let index = 0;
let textForInterests = "Check out my interests...";
let speed = 200;
let timeOutId;

function typeText() {
    if (index < textForInterests.length) {
        interest.innerHTML += textForInterests.charAt(index);
        index++;
        //console.log(speed)
        if(timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(typeText, speed);
    }

    if(interest.innerHTML === textForInterests){
        interest.innerHTML = "";
        index = 0;
        return typeText();
    }
}

typeText();

//panels
const panels = document.querySelectorAll(".panel");
console.log(panels)

function toggleOpen(){
    this.classList.toggle("open");
};

function toggleActive(e){
    console.log(e.propertyName); //linia asta ne arata comada afectata cand se face transitionend
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
};

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

//go to top button
const goToTopButton = document.getElementsByClassName("go-to-top-button")[0];

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

goToTopButton.addEventListener("click", goToTop);
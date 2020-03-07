
//type effect for interest section
const interest = document.getElementsByClassName("interest")[0];
let index = 0;
let textForInterests = "Check out my interests...";
let speed = 200;
let timeOutId;

function typeText() {
    if (index < textForInterests.length) {
        interest.innerHTML += textForInterests.charAt(index);
        index++;
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
//console.log(panels);

function toggleOpen(){
    this.classList.toggle("open");
};

function toggleActive(e){
    //console.log(e.propertyName); 
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
};

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));


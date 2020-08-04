/*variables*/
const cvListItem = document.getElementsByClassName("cv-list-item");
const highlightButton = document.getElementsByClassName("show-keywords")[0];
const hideKeywords = document.getElementsByClassName("hide-keywords")[0];
const keyword = document.getElementsByClassName("highlight");
const progressItems = document.querySelectorAll(".dynamic-progress-bar");
const dynamicProgressBarForSkills = document.getElementsByClassName("dynamic-items-skills")[0];
const dynamicProgressBarForLanguages = document.getElementsByClassName("dynamic-items-languages")[0];
const progressItemsLanguages = document.querySelectorAll(".progress-bar");
const progressItemsArray = [...progressItems];
const keywords = [...keyword];
const progressItemsLanguagesArray = [...progressItemsLanguages];

/*toggle down items*/
function toggleContent(){
    for(let i = 0; i < cvListItem.length; i++){
        const currentListItem = cvListItem[i];
        currentListItem.children[0].addEventListener("click", () => {
            let index = 0;
            currentListItem.children[index].classList.toggle("changeColor");

            while(index < currentListItem.childElementCount){
                currentListItem.children[index].classList.toggle("show");
                index++;
            }
        })
    }
};
toggleContent();

/*show keywords*/
function showKeywords(){
    keywords.forEach(word => {
        word.style.backgroundColor = "tomato";
        word.style.fontWeight = "900";
    })
}

function removeKeywords(){
    keywords.forEach(word => {
        word.style.backgroundColor = "#BFCBC8";
        word.style.fontWeight = "500";
    })
}

highlightButton.addEventListener("click", showKeywords);
hideKeywords.addEventListener("click", removeKeywords);


/*loading skills dynamically*/
function fillProgressBar(item, index, progressPercentage){
    let actualProgress = 0;
    if (actualProgress === 0) {
        actualProgress = 1;
        let progressElement = item;
        let progressIncrement = 1;
        let id = setInterval(frame, 100);
        function frame() {
            if (progressIncrement >= progressPercentage[index]) {
                clearInterval(id);
                actualProgress = 0;
            }else{
                progressIncrement++;
                progressElement.style.width = progressIncrement + "%";
                progressElement.innerHTML = progressIncrement + "%";
            } 
        }
    }
}

let clickCounterSkills = 1;
dynamicProgressBarForSkills.addEventListener("click", () => {
    if(clickCounterSkills > 1) return;
    progressItemsArray.forEach((progressItem, index) => {
        const progressPercentage = {
            0 : 90,
            1 : 85,
            2 : 80,
            3 : 90
        }
        fillProgressBar(progressItem, index, progressPercentage);
    })
    clickCounterSkills++;
})

let clickCounterLanguages = 1;
dynamicProgressBarForLanguages.addEventListener("click", () => {
    if(clickCounterLanguages > 1) return;
    progressItemsLanguagesArray.forEach((progressItem, index) => {
        const progressPercentage = {
            0 : 70,
            1 : 100
        }
        fillProgressBar(progressItem, index, progressPercentage);
    })
    clickCounterLanguages++;
})

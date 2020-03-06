const cvListItem = document.getElementsByClassName("cv-list-item");
const highlightButton = document.getElementsByClassName("show-keywords")[0];
const hideKeywords = document.getElementsByClassName("hide-keywords")[0];
const keyword = document.getElementsByClassName("highlight");
let keywords = Array.from(keyword);

function toggleContent(){
    for(let i = 0; i < cvListItem.length; i++){
        const currentListItem = cvListItem[i];
        currentListItem.children[0].addEventListener("click", () => {
            currentListItem.children[0].classList.toggle("changeColor");
            currentListItem.children[1].classList.toggle("show");
            currentListItem.children[2].classList.toggle("show");
            currentListItem.children[3].classList.toggle("show");
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


/*dynamic progress bar-skills*/
function fillProgressBar(item, index){
    const progressPercentage = {
        0 : 90,
        1 : 85,
        2 : 80,
        3 : 90
    }

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
            }else {
                progressIncrement++;
                progressElement.style.width = progressIncrement + "%";
                progressElement.innerHTML = progressIncrement + "%";
            }
        }
    }
}

const progressItems = document.querySelectorAll(".dynamic-progress-bar");
const progressItemsArray = [...progressItems];

progressItemsArray.forEach((progressItem, index) => {
    fillProgressBar(progressItem, index);
})


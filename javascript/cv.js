const cvListItem = document.getElementsByClassName("cv-list-item");
// const highlightButton = document.getElementsByClassName("highlight")[0];
// const listItemContent = document.getElementsByClassName("list-item-content")[0];

function toggleContent(){
    for(let i = 0; i < cvListItem.length; i++){
        const currentListItem = cvListItem[i];
        currentListItem.addEventListener("click", () => {
            currentListItem.children[0].classList.toggle("changeColor");
            currentListItem.children[1].classList.toggle("show");
            currentListItem.children[2].classList.toggle("show");
            currentListItem.children[3].classList.toggle("show");
        })
    }
};

toggleContent();

// function highlightText(text){
//     let textFound = document.getElementsByTagName("span")[1];
//     let textHTML = textFound.innerHTML;
//     var index = textHTML.indexOf(text);
//     if (index >= 0) { 
//         textHTML = textHTML.substring(0, index) + "<span class='highlight'>" + textHTML.substring(index, index+text.length) + "</span>" + textHTML.substring(index + text.length);
//         textFound.innerHTML = innerHTML;
//     }
// }


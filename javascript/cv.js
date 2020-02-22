const cvListItem = document.getElementsByClassName("cv-list-item");

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
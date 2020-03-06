//go to top button
const goToTopButton = document.getElementsByClassName("go-to-top-button")[0];

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

goToTopButton.addEventListener("click", goToTop);
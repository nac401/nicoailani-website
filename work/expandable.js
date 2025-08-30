const expandable = document.querySelector(".expandable__container");
const expander = document.querySelector(".expander");
let display = false;

function expand() {
    if (display == false) {
        expandable.style.display = 'block';
        display = true;
    } else {
        expandable.style.display = 'none';
        display = false;
    }
}

expander.addEventListener("click", expand, false);
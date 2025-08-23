const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const filterButtons = document.querySelectorAll(".filter__buttons button");
const filterableCards = document.querySelectorAll(".filterable__cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")

    filterableCards.forEach(card => {
        card.classList.add("hide");
        var dataList = card.dataset.name.split(',')
        for (i = 0; i < dataList.length; i++) {
            if(dataList[i] === e.target.dataset.name ||  e.target.dataset.name === "all") {
                card.classList.remove("hide")
            }
        }
    })
    
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))
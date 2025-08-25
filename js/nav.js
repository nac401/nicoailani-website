fetch('persistents/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;

    const menu = newelem.querySelector('#mobile-menu')
    const menuLinks = newelem.querySelector('.navbar__menu')
    
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    })

    oldelem.parentNode.replaceChild(newelem,oldelem);
})
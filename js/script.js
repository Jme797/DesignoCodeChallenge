const cards = document.getElementsByClassName('card');

const cardsText = document.getElementsByClassName('cardsText');

const navLinks = document.getElementById('navLinks');

/* Image ids for text split sections */

let aboutPage__headerImage = document.getElementById('aboutPage__headerImage');

/* Set mouse over actions for the cards */

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', () => {
        cardsText[i].style.backgroundColor = "#E7816B";
        cardsText[i].getElementsByTagName('h2')[0].style.color = "#ffffff";
    })
    cards[i].addEventListener('mouseout', () => {
        cardsText[i].style.backgroundColor = "#FDF3F0";
        cardsText[i].getElementsByTagName('h2')[0].style.color = "#E7816B";
    })
}

let homePageHead = document.getElementById('home__pageHead');

/* Remove the vert Flex from the main home div */

window.onresize = () => {
    removeClassesTablet();
}
window.onload = () => {
    removeClassesTablet();
}

function removeClassesTablet() {
    if (homePageHead) {
        if (screen.width < 1000) {
            homePageHead.classList.remove('vertCenter__flex');
        } else {
            homePageHead.classList.add('vertCenter__flex');
        }
    }




}


/* Set the nav bar element to mobile and add on click for showing the links */

const navBar = document.getElementById('navBar');

let navBarStyles = window.getComputedStyle(navBar);

right = "-" + navBarStyles.getPropertyValue('margin-right');


navLinks.style.left = right;

let hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {

    if (!hamburger.src.includes("mobile/icon-close.svg")) {
        hamburger.src = "assets/shared/mobile/icon-close.svg";
        navLinks.style.display = "inline-block";
        navBar.style.marginBottom = "0";

        const nav_a = navBar.getElementsByTagName('a');

        for (let i = 0; i < nav_a.length; i++) {
            nav_a[i].classList.add('a__alternate');
        }
    } else {
        hamburger.src = "assets/shared/mobile/icon-hamburger.svg";
        navLinks.style.display = "none";
        navBar.style.marginBottom = "30px";

        const nav_a = navBar.getElementsByTagName('a');

        for (let i = 0; i < nav_a.length; i++) {
            nav_a[i].classList.remove('a__alternate');
        }
    }
}
var numberOfPages = 7;
var currentPage = 0;
var toTheLeft = true;
var tabArray = [{ name: 'introContent', active: false }, { name: 'solutionTab', active: false }, { name: 'researchTab', active: false }, { name: 'aboutTab', active: false }, { name: 'teamTab', active: false }, { name: 'contactTab', active: false }];
var currentActiveTab = 'logoBox';
var bubbleCount = 0;
var bubbleRemoval = 0;

function generateBubbles() {
    generateBubble();
    setInterval(generateBubble, 1500);
}

function generateBubble() {


    const bubbleSize = Math.floor(Math.random() * 12) + 10;
    const bubbleDuration = Math.floor(Math.random() * 5) + 7;

    const freshBubbleWrapper = document.createElement('div');
    freshBubbleWrapper.className = 'bubbleWrapper';
    freshBubbleWrapper.style = 'animation: upAndAway ' + bubbleDuration + 's ease-in-out forwards';
    freshBubbleWrapper.id = 'freshBubble' + bubbleCount;
    const freshBubble = document.createElement('div');
    freshBubble.style = 'min-width: ' + bubbleSize + 'px; min-height: ' + bubbleSize + 'px;';
    if (toTheLeft) {
        freshBubble.classList.add('bubbleContent', 'leftBubble');
        toTheLeft = false;
    } else {
        freshBubble.classList.add('bubbleContent', 'rightBubble');
        toTheLeft = true;
    }
    freshBubbleWrapper.append(freshBubble);

    document.getElementById('logoBox').append(freshBubbleWrapper);

    setTimeout(() => {
        document.getElementById('freshBubble' + bubbleRemoval).remove();
        bubbleRemoval++;
    }, 10000);
    bubbleCount++;
}

/*
function makeActive(newActiveTab) {
    try {
    event.preventDefault();
    } catch(error) {
        // left blank 
    }

    // hamburgerMenu.classList.remove('clickedBurger'); 
    document.getElementById('midSectionWrapper').classList.remove('openedMenu');

    var previousActiveTab = document.getElementById(currentActiveTab);
    var previousTabNumber = Number(previousActiveTab.getAttribute('data-number'));

    var newActiveTab = document.getElementById(newActiveTab.id);
    var newTabNumber = Number(newActiveTab.getAttribute('data-number'));

    if((newTabNumber == previousTabNumber)) {
        newActiveTab.classList.toggle('currentTab');
        if(newTabNumber != 0) {
        newActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
        newActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');

        currentActiveTab = 'logoBox';
        document.getElementById('introContent').scrollIntoView(({ behavior: "smooth", block: "end", inline: "nearest" }));
    }
    } else {
        newActiveTab.classList.toggle('currentTab');
        if(newTabNumber != 0) {
        newActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
        newActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');
        }
        if(previousTabNumber != 0) {
        previousActiveTab.classList.toggle('currentTab');
        previousActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
        previousActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');
        }
    }

    var targetScrollElement = newActiveTab.getAttribute('data-section');
    document.getElementById(targetScrollElement).scrollIntoView(({ behavior: "smooth", block: "end", inline: "nearest" }));
    
    if((newTabNumber != previousTabNumber)) {
    currentActiveTab = newActiveTab.id;
}
} 
*/

document.addEventListener("DOMContentLoaded", function () {

    generateBubbles();

    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const solutionTab = document.getElementById('solutionTab');
    const aboutTab = document.getElementById('aboutTab');
    const platformTab = document.getElementById('platformTab');
    const teamTab = document.getElementById('teamTab');
    const contactTab = document.getElementById('contactTab');
    const logoBox = document.getElementById('logoBox');

    function handleBurgerClickOrTouch(event) {
        event.preventDefault();
        hamburgerMenu.classList.toggle('clickedBurger');
        document.getElementById('midSectionWrapper').classList.toggle('openedMenu');
    }

    logoBox.addEventListener('mousedown', function () {
        makeActive(logoBox);
    }, false);
    logoBox.addEventListener('touchstart', function () {
        makeActive(logoBox);
    }, false);
    solutionTab.addEventListener('mousedown', function () {
        makeActive(solutionTab);
    }, false);
    solutionTab.addEventListener('touchstart', function () {
        makeActive(solutionTab);
    }, false);
    aboutTab.addEventListener('mousedown', function () {
        makeActive(aboutTab);
    }, false);
    aboutTab.addEventListener('touchstart', function () {
        makeActive(aboutTab);
    }, false);
    platformTab.addEventListener('mousedown', function () {
        makeActive(platformTab);
    }, false);
    platformTab.addEventListener('touchstart', function () {
        makeActive(platformTab);
    }, false);
    teamTab.addEventListener('mousedown', function () {
        makeActive(teamTab);
    }, false);
    teamTab.addEventListener('touchstart', function () {
        makeActive(teamTab);
    }, false);
    contactTab.addEventListener('mousedown', function () {
        makeActive(contactTab);
    }, false);
    contactTab.addEventListener('touchstart', function () {
        makeActive(contactTab);
    }, false);

    hamburgerMenu.addEventListener('mousedown', handleBurgerClickOrTouch);
    hamburgerMenu.addEventListener('touchstart', handleBurgerClickOrTouch);

    // Adding animations based on intersections

    function animationIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.getAttribute("data-animation-class"));
                observer.unobserve(entry.target);
            }
        });
    }

    const animationOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.01,
    };
    const animationElements = document.querySelectorAll('.pendingAnimation');

    animationElements.forEach(targetElement => {
        const observer = new IntersectionObserver(animationIntersection, animationOptions);
        observer.observe(targetElement);
    });

    // Testing new stuff


    function makeVisuallyActive(newActiveTab) {

        try {
            event.preventDefault();
        } catch (error) {
            /* left blank */
        }

        /* hamburgerMenu.classList.remove('clickedBurger'); */
        document.getElementById('midSectionWrapper').classList.remove('openedMenu');

        var previousActiveTab = document.getElementById(currentActiveTab);
        var previousTabNumber = Number(previousActiveTab.getAttribute('data-number'));

        var newActiveTab = document.getElementById(newActiveTab.id);
        var newTabNumber = Number(newActiveTab.getAttribute('data-number'));

        if ((newTabNumber == previousTabNumber)) {
            newActiveTab.classList.toggle('currentTab');
            if (newTabNumber != 0) {
                newActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
                newActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');

                currentActiveTab = 'logoBox';
            }
        } else {
            newActiveTab.classList.toggle('currentTab');
            if (newTabNumber != 0) {
                newActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
                newActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');
            }
            if (previousTabNumber != 0) {
                previousActiveTab.classList.toggle('currentTab');
                previousActiveTab.querySelector('.bigSectionBubble').classList.toggle('noSized');
                previousActiveTab.querySelector('.smallSectionBubble').classList.toggle('noSized');
            }
        }

        var targetScrollElement = newActiveTab.getAttribute('data-section');

        if ((newTabNumber != previousTabNumber)) {
            currentActiveTab = newActiveTab.id;
        }
    }



    // Testing new stuff
    function activeIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                makeVisuallyActive(document.querySelector('[data-section="' + entry.target.id + '"]'));

            }
        });
    }

    const activeOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.51,
    };
    const activeElements = document.querySelectorAll('.bigContent');

    activeElements.forEach(targetElement => {
        const observer = new IntersectionObserver(activeIntersection, activeOptions);
        observer.observe(targetElement);
    });





});







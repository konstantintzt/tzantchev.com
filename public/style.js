const INITIAL_TYPEWRITER_DELAY = 1000; // 1s
const LETTER_TYPEWRITER_DELAY = 40; // 40ms between each letter being typed 

let topScroll = window.pageYOffset || document.documentElement.scrollTop
let leftScroll = window.pageXOffset || document.documentElement.scrollLeft

window.onscroll = () => {
    window.scrollTo(leftScroll, topScroll)
}

setTimeout(turnOnText, 6500)

window.addEventListener('scroll', function() {

    // Reveal sections on scroll
    const section1 = document.getElementById("section1")
    section1.style.opacity = -Math.abs((document.documentElement.scrollTop-600)/400)+1
    const section2 = document.getElementById("section2")
    section2.style.opacity = -Math.abs((document.documentElement.scrollTop-950)/400)+1
    const section3 = document.getElementById("section3")
    section3.style.opacity = -Math.abs((document.documentElement.scrollTop-1450)/400)+1
    const section4 = document.getElementById("section4")
    section4.style.opacity = -Math.abs((document.documentElement.scrollTop-1450)/400)+1

    // Parallax effect for blobs
    const blobOneElement = document.getElementById("blob-1")
    blobOneElement.style.top = (-100000/(document.documentElement.scrollTop+350))+350+"px"
    const blobTwoElement = document.getElementById("blob-2")
    blobTwoElement.style.top = (-100000/(document.documentElement.scrollTop+350))+500+"px"
    const blobThreeElement = document.getElementById("blob-3")
    blobThreeElement.style.top = (-100000/(document.documentElement.scrollTop+350))+700+"px"
    const blobFourElement = document.getElementById("blob-4")
    blobFourElement.style.top = (-100000/(document.documentElement.scrollTop+350))+1200+"px"
    const blobFiveElement = document.getElementById("blob-5")
    blobFiveElement.style.top = (-100000/(document.documentElement.scrollTop+350))+1400+"px"
    const blobSixElement = document.getElementById("blob-6")
    blobSixElement.style.top = (-100000/(document.documentElement.scrollTop+350))+2050+"px"
})

function turnOnText() {
    window.onscroll = () => {}
    
}

function typeWriter(text, element, speed, currentChar) {
    const htmlElement = document.getElementById(element);
    if (currentChar == -1) {
        setTimeout(typeWriter, INITIAL_TYPEWRITER_DELAY, text, element, speed, currentChar+1);
    } else if (currentChar < text.length) {
        if (currentChar == 0) htmlElement.innerHTML = "";
        htmlElement.innerHTML += text.charAt(currentChar);
        setTimeout(typeWriter, speed, text, element, speed, currentChar+1);
    }
}

function loadContent() {
    const htmlElement = document.getElementById("body-container");
    htmlElement.style.display = "flex";
}

function typingAnimation() {
    typeWriter('Hello.', 'hello-animated', LETTER_TYPEWRITER_DELAY, -1);
    setTimeout(typeWriter, 1250,'Welcome to Konstantin\'s website.', 'site-animated', LETTER_TYPEWRITER_DELAY, -1);
    setTimeout(typeWriter, 3550, '↓ Scroll down to learn more.', 'scroll-animated', LETTER_TYPEWRITER_DELAY, -1);
    setTimeout(loadContent, 6000);
}
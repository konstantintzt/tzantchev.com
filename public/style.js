const INITIAL_TYPEWRITER_DELAY = 1000; // 1s
const LETTER_TYPEWRITER_DELAY = 40; // 40ms between each letter being typed 

window.addEventListener('scroll', function() {
    const htmlElement = document.getElementById("body-container");
    htmlElement.style.opacity = (document.documentElement.scrollTop-200)/400;
})

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
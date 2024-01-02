const dynamicText = document.querySelector("h1 span");
const word = ["Welcome to My Portfolio", "Let's Explore My Portfolio", "Press The Button Below"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = word[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking")

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 100);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 50);
    }else{
        isDeleting = !isDeleting
        dynamicText.classList.remove("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex;
        setTimeout(typeEffect, 1200);

    }
}

typeEffect();
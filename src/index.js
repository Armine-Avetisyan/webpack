import { hiddenButton, hiddenParagraph } from "./dom";
let showText = false;

hiddenButton.addEventListener('click', getHiddenText );

updateHiddenParagraph();

function getHiddenText() {
    showText = !showText;
    updateHiddenParagraph();
    updateHiddenButton();
}

function updateHiddenButton() {
    if (showText) {
        hiddenButton.textContent = 'Hide the Text';
    } else {
        hiddenButton.textContent = 'Show the Text';
    }
}

function updateHiddenParagraph() {
    if (showText) {
        hiddenParagraph.style.display = 'block';
    } else {
        hiddenParagraph.style.display = 'none';
    }
}

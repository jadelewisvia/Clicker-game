let bubble = document.getElementById("bubble")
let displayBubbles = document.getElementById("displayBubbles")

bubble.addEventListener("click", bubbleclicked)

let bubbles = 0
let multiplier = 1

function bubbleClicked() {
    bubbles = bubbles + multiplier

}

function displayBubblesAmt(){
    displayBubbles.innerHTML = (bubbles)
}
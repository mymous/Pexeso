window.onload =function() {
        newGame();
}

let absoluteBoxes = document.getElementsByClassName("inner-box");
for (let i = 0; i < absoluteBoxes.length; i++) {
    absoluteBoxes[i].addEventListener("click", hide);
}
const NGButton = document.getElementById("newGameButton");
NGButton.addEventListener("click", newGame);


const flagArray = ["https://flagcdn.com/128x96/fr.png", "https://flagcdn.com/128x96/jp.png", "https://flagcdn.com/128x96/it.png", "https://flagcdn.com/128x96/cz.png", "https://flagcdn.com/128x96/at.png", "https://flagcdn.com/128x96/de.png", "https://flagcdn.com/128x96/es.png", "https://flagcdn.com/128x96/gb-eng.png"];
const picturesArray = document.getElementsByClassName("picture");


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function hide() {
    this.hidden = true;
    this.className += " clickedOn";
    this.previousElementSibling.className += " chosen";
    let removeClickedOn = document.querySelectorAll(".clickedOn");
    let removeChosen = document.querySelectorAll(".chosen");
    if (removeClickedOn.length < 2) {
    } else if (removeChosen[0].getAttribute("src") === removeChosen[1].getAttribute("src")) {
        document.getElementById("feedback").innerText = "Good job!";
        for (let i=0; i < removeClickedOn.length; i++) {
            removeClickedOn[i].setAttribute("class", "inner-box");
        }
        for (let i=0; i < removeChosen.length; i++) {
            removeChosen[i].setAttribute("class", "picture");
        }
    } else {
        setTimeout(() => {
            document.getElementById("feedback").innerText = "Wrong!";
         for (let i=0; i < removeClickedOn.length; i++) {
                 removeClickedOn[i].setAttribute("class", "inner-box");
                 removeClickedOn[i].removeAttribute("hidden");
        }
         for (let i=0; i < removeChosen.length; i++) {
                 removeChosen[i].setAttribute("class", "picture");
        }
        }, 1000)   
    }
}

function newGame () {
    let flagArrayCopy = ["https://flagcdn.com/128x96/fr.png", "https://flagcdn.com/128x96/jp.png", "https://flagcdn.com/128x96/it.png", "https://flagcdn.com/128x96/cz.png", "https://flagcdn.com/128x96/at.png", "https://flagcdn.com/128x96/de.png", "https://flagcdn.com/128x96/es.png", "https://flagcdn.com/128x96/gb-eng.png"];
    const removeHidden = document.querySelectorAll(".inner-box");
    const removeDone = document.querySelectorAll(".done");

    document.getElementById("feedback").innerText = "Click on a pair!";

    for (let i=0; i < removeHidden.length; i++) {
        removeHidden[i].removeAttribute("hidden");
    }
    for (let i=0; i < removeDone.length; i++) {
        removeDone[i].setAttribute("class", "picture");
    }
    for (let i=0; i < picturesArray.length; i++) {
        const randomNumber = randomInteger(0, flagArrayCopy.length);
        if ((flagArrayCopy.length === 0) && (document.getElementsByClassName("done").length < 15)) {
            const specialRandomNumber = randomInteger(0, 8);
            flagArrayCopy = ["https://flagcdn.com/128x96/fr.png", "https://flagcdn.com/128x96/jp.png", "https://flagcdn.com/128x96/it.png", "https://flagcdn.com/128x96/cz.png", "https://flagcdn.com/128x96/at.png", "https://flagcdn.com/128x96/de.png", "https://flagcdn.com/128x96/es.png", "https://flagcdn.com/128x96/gb-eng.png"];
            picturesArray[i].setAttribute("src", flagArrayCopy[specialRandomNumber]);
            picturesArray[i].className += " done";
            flagArrayCopy.splice(specialRandomNumber, 1);
            console.log("Pog");
        } else {
            picturesArray[i].setAttribute("src", flagArrayCopy[randomNumber]);
            picturesArray[i].className += " done";
            flagArrayCopy.splice(randomNumber, 1);
        }
    }
}



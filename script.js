window.onload=function() {
    const absoluteOne = document.getElementById("first-absolute");
    const absoluteTwo = document.getElementById("second-absolute");
    const absoluteThree = document.getElementById("third-absolute");
    const absoluteFour = document.getElementById("fourth-absolute");
    const absoluteFive = document.getElementById("fifth-absolute");
    const absoluteSix = document.getElementById("sixth-absolute");
    absoluteOne.addEventListener("click", hide1);
    absoluteTwo.addEventListener("click", hide2);
    absoluteThree.addEventListener("click", hide3);
    absoluteFour.addEventListener("click", hide4);
    absoluteFive.addEventListener("click", hide5);
    absoluteSix.addEventListener("click", hide6);
    }


function hide1() {
    var absoluteTwoHidden = document.getElementById("second-absolute").hidden;
    var absoluteThreeHidden = document.getElementById("third-absolute").hidden;
    var absoluteFourHidden = document.getElementById("fourth-absolute").hidden;
    var absoluteFiveHidden = document.getElementById("fifth-absolute").hidden;
    var absoluteSixHidden = document.getElementById("sixth-absolute").hidden;

    this.hidden = true;
    this.className += " clickedOn";
 
    if (absoluteTwoHidden && absoluteThreeHidden && absoluteFourHidden && absoluteFiveHidden && absoluteSixHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteFourHidden) {
        setTimeout(() => {
        window.alert("Good job!");
        var remove = document.querySelectorAll(".clickedOn");
        for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
        window.alert("Wrong!");
        var revert = document.querySelectorAll(".clickedOn");
        for (let i=0; i < revert.length; i++) {
            revert[i].removeAttribute("hidden");
            revert[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    }
}

function hide2() {
    var absoluteOneHidden = document.getElementById("first-absolute").hidden;
    var absoluteThreeHidden = document.getElementById("third-absolute").hidden;
    var absoluteFourHidden = document.getElementById("fourth-absolute").hidden;
    var absoluteFiveHidden = document.getElementById("fifth-absolute").hidden;
    var absoluteSixHidden = document.getElementById("sixth-absolute").hidden;

    document.getElementById("second-absolute").hidden = true;
    document.getElementById("second-absolute").className += " clickedOn";
 
    if (absoluteOneHidden && absoluteThreeHidden && absoluteFourHidden && absoluteFiveHidden && absoluteSixHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteThreeHidden) {
        setTimeout(() => {
        window.alert("Good job!");
        var remove = document.querySelectorAll(".clickedOn");
        for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
            window.alert("Wrong!");
            var revert = document.querySelectorAll(".clickedOn");
            for (let i=0; i < revert.length; i++) {
                revert[i].removeAttribute("hidden");
                revert[i].setAttribute("class", "absolute-box");
            }
        }, 500)
    }
}

function hide3() {
    var absoluteOneHidden = document.getElementById("first-absolute").hidden;
    var absoluteTwoHidden = document.getElementById("second-absolute").hidden;
    var absoluteFourHidden = document.getElementById("fourth-absolute").hidden;
    var absoluteFiveHidden = document.getElementById("fifth-absolute").hidden;
    var absoluteSixHidden = document.getElementById("sixth-absolute").hidden;

    document.getElementById("third-absolute").hidden = true;
    document.getElementById("third-absolute").className += " clickedOn";
 
    if (absoluteOneHidden && absoluteTwoHidden && absoluteFourHidden && absoluteFiveHidden && absoluteSixHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteTwoHidden) {
        setTimeout(() => {
        window.alert("Good job!");
        var remove = document.querySelectorAll(".clickedOn");
        for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
            window.alert("Wrong!");
            var revert = document.querySelectorAll(".clickedOn");
            for (let i=0; i < revert.length; i++) {
                revert[i].removeAttribute("hidden");
                revert[i].setAttribute("class", "absolute-box");
            }
        }, 500)
    }
}

function hide4() {
    var absoluteOneHidden = document.getElementById("first-absolute").hidden;
    var absoluteTwoHidden = document.getElementById("second-absolute").hidden;
    var absoluteThreeHidden = document.getElementById("third-absolute").hidden;
    var absoluteFiveHidden = document.getElementById("fifth-absolute").hidden;
    var absoluteSixHidden = document.getElementById("sixth-absolute").hidden;

    document.getElementById("fourth-absolute").hidden = true;
    document.getElementById("fourth-absolute").className += " clickedOn";

    if (absoluteOneHidden && absoluteTwoHidden && absoluteThreeHidden && absoluteFiveHidden && absoluteSixHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteOneHidden) {
        setTimeout(() => {
        window.alert("Good job!");
        var remove = document.querySelectorAll(".clickedOn");
        for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
            window.alert("Wrong!");
            var revert = document.querySelectorAll(".clickedOn");
            for (let i=0; i < revert.length; i++) {
                revert[i].removeAttribute("hidden");
                revert[i].setAttribute("class", "absolute-box");
            }
        }, 500)
    }
}

function hide5() {
    var absoluteOneHidden = document.getElementById("first-absolute").hidden;
    var absoluteTwoHidden = document.getElementById("second-absolute").hidden;
    var absoluteThreeHidden = document.getElementById("third-absolute").hidden;
    var absoluteFourHidden = document.getElementById("fourth-absolute").hidden;
    var absoluteSixHidden = document.getElementById("sixth-absolute").hidden;

    document.getElementById("fifth-absolute").hidden = true;
    document.getElementById("fifth-absolute").className += " clickedOn";

    
    if (absoluteOneHidden && absoluteTwoHidden && absoluteThreeHidden && absoluteFourHidden && absoluteSixHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteSixHidden) {
        setTimeout(() => {
        window.alert("Good job!");
        var remove = document.querySelectorAll(".clickedOn");
        for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
        }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
            window.alert("Wrong!");
            var revert = document.querySelectorAll(".clickedOn");
            for (let i=0; i < revert.length; i++) {
                revert[i].removeAttribute("hidden");
                revert[i].setAttribute("class", "absolute-box");
            }
        }, 500)
    }
}

function hide6() {
    var absoluteOneHidden = document.getElementById("first-absolute").hidden;
    var absoluteTwoHidden = document.getElementById("second-absolute").hidden;
    var absoluteThreeHidden = document.getElementById("third-absolute").hidden;
    var absoluteFourHidden = document.getElementById("fourth-absolute").hidden;
    var absoluteFiveHidden = document.getElementById("fifth-absolute").hidden;

    document.getElementById("sixth-absolute").hidden = true;
    document.getElementById("sixth-absolute").className += " clickedOn";

    if (absoluteOneHidden && absoluteTwoHidden && absoluteThreeHidden && absoluteFourHidden && absoluteFiveHidden) {
        setTimeout(() => {
            window.alert("You win!");
    }, 500)
    } else if (absoluteFiveHidden) {
        setTimeout(() => {
            window.alert("Good job!");
            var remove = document.querySelectorAll(".clickedOn");
            for (let i=0; i < remove.length; i++) {
                remove[i].setAttribute("class", "absolute-box");
            }
    }, 500)
    } else if (document.querySelectorAll(".clickedOn").length >= 2) {
        setTimeout(() => {
            window.alert("Wrong!");
            var revert = document.querySelectorAll(".clickedOn");
            for (let i=0; i < revert.length; i++) {
                revert[i].removeAttribute("hidden");
                revert[i].setAttribute("class", "absolute-box");
            }
        }, 500)
    }
}
export class Player {
    constructor(infectionLevel) {
        this.infectionLevel = infectionLevel;
    }

    startInfection() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (4 - 1) + 1);
        }, 3000);
    }

    gameOver() {
        if (this.infectionLevel >= 10) {
            alert("you have lost");
        } else { return false; }
    }

    // firstHelpPack() {
    //     setTimeout(() => {
    //         $("#firstbutton").html("<button onclick='minus()'>Work on Cure</button>")
    //     }, 3000);
    // }
    // minus() {
    //     this.infectionLevel -= 1;
    // }

    // move() {
    //     var elem = document.getElementById("myBar");
    //     var width = 0;
    //     var id = setInterval(frame, 1000);
    //     function frame() {
    //         if (width == 100) {
    //             clearInterval(id);
    //         } else {
    //             width++;
    //             elem.style.width = width + '%';
    //         }
    //     }
    // }
    // Stage1() {
    //     setTimeout(() => {
    //         setInterval(() => {
    //             this.infectionLevel += Math.floor(Math.random() * (7 - 1) + 1);
    //         }, 8000);
    //     }, 60000);
    // }

    // Stage2() {
    //     setTimeout(() => {
    //         setInterval(() => {
    //             this.infectionLevel++;
    //         }, 1000);
    //     }, 120000);
    // }

    // setTimeout(() {
    //     this.infectionLevel === 100;
    // }, 1800000);




}

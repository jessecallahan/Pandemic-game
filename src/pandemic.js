export class Game {
    constructor(infectionLevel) {
        this.infectionLevel = infectionLevel;
    }

    startInfection() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (4 - 1) + 1);
        }, 3000);

    }

    // minusFunction() {
    //     let a = this.infectionLevel -= 1;
    //     return a
    // }

    // quickCure() {
    //     setInterval(() => {
    //         this.infectionLevel += Math.floor(Math.random() * (4 - 1) + 1);
    //     }, 3000);

    // }

    // firstHelpPackShow() {
    //     setTimeout(() => {
    //         $("#firstbutton").text("first button goes here")

    //     }, 5000);

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

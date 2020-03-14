export class Player {
    constructor(name) {
        this.name = name;
        this.infectionLevel = 0;
        this.startInfection();
    }

    startInfection() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (7 - 1) + 1);
        }, 1000);
    }

    isDead() {
        if (this.infectionLevel >= 100) {
            return true;
        } else {
            return false;
        }
    }


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

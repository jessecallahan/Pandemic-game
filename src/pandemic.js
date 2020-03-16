export class Game {
    constructor(infectionLevel) {
        this.infectionLevel = infectionLevel;
    }

    startInfection() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (4 - 1) + 1);
        }, 3000);

    }


    doctor1() {
        this.infectionLevel--;
    }

    cure() {
        setInterval(() => {
            let num = Math.floor(Math.random() * (3 - 1) + 1); - 0
            $("#cure1level").append("-" + num + "% ")
            return this.infectionLevel -= num
        }, 5000);
    }

    cure2() {
        setInterval(() => {
            let num = Math.floor(Math.random() * (4 - 1) + 1); - 0
            $("#cure2level2").append("-" + num + "% ")
            return this.infectionLevel -= num
        }, 6000);
    }

    vaccine() {
        setInterval(() => {
            let num = Math.floor(Math.random() * (11 - 1) + 1); - 0
            $("#cure2level2").append("-" + num + "% ")
            return this.infectionLevel -= num
        }, 10000);
    }

    vaccineClock() {
        let clock = 365;
        setInterval(() => {
            $("#vaccineClock").html((clock--) + " days until vaccine developed")
            if (clock === 0) {
                $("#vaccineClock").hide();
                $("#vaccineButton").show();
            }
        }, 1000);
    }


}
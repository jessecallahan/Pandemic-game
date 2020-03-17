export class Game {
    constructor(infectionLevel) {
        this.infectionLevel = infectionLevel;
    }

    startInfection() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (5 - 1) + 1);
        }, 3000);

    }


    doctor1() {
        this.infectionLevel--;
    }

    doctor2() {
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
        }, 7000);
    }

    quarantine1() {
        setInterval(() => {
            this.infectionLevel -= 10
            $("#quarantine1level").append("-" + 10 + "% ")
        }, 30000);
    }

    quarantine2() {
        setInterval(() => {
            this.infectionLevel -= 8
            $("#cure3level").append("-" + 8 + "% ")
        }, 30000);
    }

    vaccineClock() {
        let clock = 365;
        setInterval(() => {
            $("#vaccineClock").html((clock--) + " days until vaccine available")
            if (clock === 0) {
                $("#vaccineClock").hide();
                $("#vaccineButton").show();
            }
        }, 1000);
    }

    quarantineClock() {
        let clock = 30;
        setInterval(() => {
            $("#quarantineClock").html((clock--) + " days until quarantine implemented")
            if (clock === 0) {
                $("#quarantineClock").hide();
                this.quarantine1();
            }
        }, 1000);
    }

    quarantineClock2() {
        let clock = 30;
        setInterval(() => {
            $("#quarantine2Clock").html((clock--) + " days until quarantine implemented")
            if (clock === 0) {
                $("#quarantine2Clock").hide();
                this.quarantine2();
            }
        }, 1000);
    }

    // animalQuiz() {
    //     if ( === "1") {
    //         return $('#animalLevel').append("woah")
    //     }
    // }

}
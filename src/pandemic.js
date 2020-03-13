export class Player {

    constructor(name) {
        this.name = name;

        this.infectionLevel = 0;

    }
    //;
    // infectionRate() {
    //     return Math.floor(Math.random() * (7 - 1) + 1)
    // }

    // setTimeout(infectionRate() {
    //     alert()
    // }, 0);

    // setTimeout(function() {
    //     alert("Hello friend! Maybe you should sign up for our newsletter!");
    // }, 20000);

    // setTimeout() {
    //     infectionRate(()
    // } 0);

    // gameEnds() {
    //     setTimeout(() => {
    //         ;
    //     }, 60000);
    // }
    infectionRate() {
        setInterval(() => {
            this.infectionLevel += Math.floor(Math.random() * (7 - 1) + 1);
        }, 1000)
    }

    pandemicDeath1() {
        setTimeout(() => {
            this.infectionLevel = 100;
        }, 60000);
    }

    pandemicDeath() {
        if (this.infectionLevel >= 100) {
            return true;
        } else {
            return false;
        }
    }

    //     nurse() {
    //         this.lifeForce = 10;
    //     }
}
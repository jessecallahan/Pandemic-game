import { Player } from './../src/pandemic.js';

describe('Jesse', () => {
    jest.useFakeTimers();
    let player1;


    beforeEach(function () {
        player1 = new Player("Jesse");
        player1.infectionRate();
        player1.pandemicDeath1();
    });

    afterEach(function () {
        jest.clearAllTimers();
    });

    test('should have a name and a life force of 10 when it is created', () => {
        expect(player1.name).toEqual("Jesse");
        expect(player1.infectionLevel).toEqual(0);
    });

    test('should change infection level to randomn whole number between 1-6', () => {
        jest.advanceTimersByTime(1001);
        expect(player1.infectionLevel).toEqual(3);
    });

    test('should change infection level to randomn whole number after 10 secs', () => {
        jest.advanceTimersByTime(10001);
        expect(player1.infectionLevel).toEqual(3);
    });

    test('should change infection level to randomn whole number after 20 secs', () => {
        jest.advanceTimersByTime(20001);
        expect(player1.infectionLevel).toEqual(3);
    });

    test('should change infection level to 100 after 60 secs ending the game', function () {
        jest.advanceTimersByTime(60001);
        console.log(player1.infectionLevel)
        expect(player1.infectionLevel).toEqual(100);
    });

    test('should change infection level to 100 ending the game', function () {
        player1.infectionLevel = 100;
        expect(player1.pandemicDeath()).toEqual(true);
    });



});
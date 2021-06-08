// OOP - Object Oriented Programming - a programming paradigm

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

const player1 = {
    name: 'Bob',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        console.log(this);
        dice = Math.floor(1 + 6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        // updating the cash
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}

const player2 = {
    name: 'Alice',
    color: 'blue',
    position: 0,
    cash: 1000,
    move: function () {
        console.log(this);
        dice = Math.floor(1 + 6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        // updating the cash
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}
console.clear();

// classes - blueprint for an object
class Player {
    // this is the constructor - it get's called if we create a new Player object
    constructor(nameParam, colorParam) {
        this.playername = nameParam;
        this.color = colorParam;
        this.position = 0;
        this.cash = 1000;
    }

    // we can only have functions / methods in the class, nothing else 
    move() {
        console.log('move');
        dice = Math.floor(1 + 6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        // updating the cash
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}

// this creates a new Player object
const p1 = new Player('Bob', 'red');
// const p2 = new Player('Alice', 'green');
// p1.age = 34;
console.log(p1);
console.log(p1.color);
// console.log(p2);
// p2.move();
// make the move
// we roll the dice
// player1.move();
// dice should now be a random number between 1 and 6
dice = Math.floor(1 + 6 * Math.random());
// console.log(dice);

// add the dice to the position of the player
// if ((player1.position + dice) > squares.length) {
//     player1.position = player1.position + dice - squares.length;
// } else {
//     player1.position = player1.position + dice;
// }
// or simpler using modulo
player1.position = (player1.position + dice) % squares.length;
if (player1.cash <= 0) {
    console.log('game over for ' + player1.name);
}
// console.log(player1);


// 
/*
let chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes: [
        'Chuck Norris counted to infinity... Twice.',
        'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function () {
        console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
    },
    getAge: function () {
        return new Date().getFullYear() - this.birthDate.getFullYear()
    },
    addJoke: function (joke) {
        this.jokes.push(joke);
    },
    getRandomJoke: function () {
        return this.jokes[Math.floor(Math.random * this.jokes.length)];
    },
}

chuck.displayInfo();

console.log('getAge', chuck.getAge());

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();
*/
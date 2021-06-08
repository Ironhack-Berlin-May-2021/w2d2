// inheritance


// these classes share a lot of the same properties -> we create a common parent 
// and let both classes inherit from that
class Cat {
    constructor(name, color, sound, numberOfLives) {
        this.name = name;
        this.color = color;
        this.sound = sound;
        this.numberOfLives = numberOfLives;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Bird {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    fly() {
        console.log('i am flying');
    }

    makeSound() {
        console.log(this.sound);
    }

}

// this is the parent class now 
class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
    walk() {
        console.log('walking');
    }
}

// the extends keyword indicates that this class inherits from Animal
class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        // these properties need to be passed to the parent constructor; 
        super(name, color, sound);
        this.numberOfLives = numberOfLives;
    }
}

class Bird extends Animal {
    constructor(name, color, sound) {
        // these properties need to be passed to the parent constructor; 
        super(name, color, sound);
    }
    fly() {
        console.log('i am flying');
    }
    // overriding the parent method -> this get's used for bird.makeSound();
    makeSound() {
        // i want to call the walk method from animal
        super.walk();
        console.log('sound from the bird class');
    }

}
// we use the new keyword to create an object from the Bird class
const bird = new Bird('pete', 'yellow', 'peep');
console.log(bird);
bird.makeSound();

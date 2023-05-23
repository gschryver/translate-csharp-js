console.log("Let's roll some dice, baby!")
console.log("---------------------------")

// die class
class Die {
    // constructor runs when a new instance of die is created & sets the value property
    constructor(value) {
        // 'this.value' refers to the property 'value' of the current instance of die 
        // value represents the value of the die
        this.value = value;
    }

    // returns a string representation of the die
    toString() {

        let dieString = "Unknown";

        // switch will execute different code depending on the value of 'this.value'
        switch (this.value) {
            // if (this.value === 1) { dieString = "one"; } etc 
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }
}

const roll = () => {
    // generates a random value between 1 and 6
    const dieValue = Math.floor(Math.random() * 6) + 1;
    // returns a new instance of die with the randomly generated value
    return new Die(dieValue);
}

for (let i = 0; i < 10; i++) {

    let die1 = roll();
    let die2 = roll();

    let message = `${die1.toString()} + ${die2.toString()} == ${die1.value + die2.value}`;

    if (die1.value === die2.value) {
        message += " DOUBLES!";
    }

    console.log(message);
}

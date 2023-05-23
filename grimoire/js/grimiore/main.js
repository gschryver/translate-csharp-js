console.log("Do you believe in magic?");
console.log("------------------------");

getAllSpells = () => {
const spells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false, 
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
]

    return spells;
}

// defines the structure of the individual spells 
class Spell {
    constructor(name, isEvil, energyRequired) {
        this.name = name; 
        this.isEvil = isEvil;
        this.energyRequired = energyRequired;
    }
}

// represents the structure of the spell book by defining the title and spells
class SpellBook {
    constructor(title, spells) {
        this.title = title; 
        this.spells = spells;
    }
}

const allSpells = getAllSpells(); // array of all spells
const goodBook = new SpellBook("Good Book", allSpells.filter(spell => !spell.isEvil)); // filter spells that are not evil
const evilBook = new SpellBook("Evil Book", allSpells.filter(spell => spell.isEvil)); // filter spells that are evil

// the 'book' parameter expects an object with a title and spells property, e.g. goodBook or evilBook
const displaySpellBook = (book) => {
    console.log(book.title);
    for (const spell of book.spells) {
        console.log(`  ${spell.name}`);
    }
}

displaySpellBook(goodBook); 
console.log("");
displaySpellBook(evilBook);
class Ninja {

    constructor(name){
        this.speed = 3;
        this.name = name;
    }
    speed;
    name;
    health;
    strengh;

    sayName(){
        console.log(name);
    }
    showStats(){
        console.log(`Name: ${this.name} `);
        console.log(`Strengh: ${this.strengh} `);
        console.log(`Speed: ${this.speed} `);
        console.log(`Health: ${this.health} `);
    }

    drinkShake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 300;
        this.speed = 10;
        this.strengh = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log(`Wisdom: ${this.wisdom}`);
        super.drinkShake;
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

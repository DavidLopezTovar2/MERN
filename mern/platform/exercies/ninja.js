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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

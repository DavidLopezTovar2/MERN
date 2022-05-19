
class Sandwich{
    constructor(protein,bread,vegetables){
        this.protein = protein;
        this.bread = bread;
        this.vegetables = vegetables;
        this.calories = 400;
        this.sizeBread = 10;
    }
    adjustCalories(){
        if (this.bread === 'blanco') {
            this.calories = 100;
        }else{
            this.calories = 400;
        }
    }
    eat(){
        this.sizeBread -= 25;
    }
};

const sandwichPepperoni = new Sandwich('pepperoni','integral','lettuce');
console.log(sandwichPepperoni);
sandwichPepperoni.eat();

class Special extends Sandwich {
    constructor(premiumIngrediest,protein,bread,vegetables){
        super(protein,bread,vegetables);
        this.premiumIngrediest = premiumIngrediest;
    }
}

const fancySandwich = new Special('Serrano jam','queso','blanco','tomate');
console.log(fancySandwich);


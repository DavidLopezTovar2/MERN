
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




console.log('Pregunta 3');
console.log(banksClientsTaxNumbers());
console.log('Pregunta 4');
console.log(richClientsBalances());
console.log('Pregunta 5');
console.log(banksRankingByTotalBalance());
console.log('Pregunta 6');
console.log(banksFidelity());
console.log('Pregunta 7');
console.log(banksPoorClients());
console.log('Pregunta 8');
console.log(newClientRanking());
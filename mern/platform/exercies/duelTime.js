class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,stat,mag){
        super(name,cost);
        this.stat = stat;
        this.mag = mag;
    }
}

const playCards = (unit,effect) => {
    if(effect.stat === 'res'){
        unit.res += effect.mag;
    }else{
        unit.power += effect.mag;
    }
}

//Shift 1
let ninjaRedVelt = new Unit ('Ninja Red Belt',3,3,4);
let hardAlgorithm = new Effect('Hard algorithm',2,'res',3);
playCards(ninjaRedVelt,hardAlgorithm);

//Shift 2
let ninjaBlackVelt = new Unit ('Ninja Black Belt',4,5,4);
let promeseRejected = new Effect('Promise rejected',1,'res',-2);
playCards(ninjaBlackVelt,promeseRejected);

//Shift 3
let pairProgramming = new Effect('Pair programming',3,'power',2);
playCards(ninjaRedVelt,pairProgramming);
ninjaRedVelt.attack(ninjaBlackVelt);

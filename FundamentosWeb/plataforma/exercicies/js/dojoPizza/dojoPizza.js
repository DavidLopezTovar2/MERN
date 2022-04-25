function pizzaOven(cutType, sauceType, chesse, ingredients) {
    var pizza = {};
    pizza.cutType = cutType;
    pizza.sauceType = sauceType;
    pizza.chesse = chesse;
    pizza.ingredients = ingredients;
    return pizza;
}
    
var pizza1 = pizzaOven("Chicago","Traditional",["mozzarella"],["mozarella","pepperoni","salchicha"]);
var pizza2 = pizzaOven( "throw by hand","Marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza3 = pizzaOven("circle","Tomato",["blue","feta"],["tomato","pineapple","jam"]);
var pizza4 = pizzaOven("rectangular","mayo",["sabanero"],["jam","pepperoni","salami"]);
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
user.pop();
console.log(user); 

// T Diagram
//  var              |       Value
//  auntContactInfo  |      ["Dwight", "Schrute", "beetsbears@battlestar.com"]
//  auntContactInfo  |      ["Dwight", "Schrute"]

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

// T Diagram
//  var                |       Value
//  produce            |      ["manzanas", "naranjas"]
//  frozen             |      ["brócoli", "helado"]
//  frozen             |      ["brócoli", "helado","croqueta de papa"]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

// T Diagram
//  var                |       Value
//  movieLibrary       |      ["Bambi", "E.T.", "Toy Story"]
//  movieLibrary       |      ["Bambi", "E.T.", "Toy Story", "Zorro"]
//  movieLibrary       |      ["Bambi", "Beetlejuice", "Toy Story"]
//  movieLibrary       |      ["Bambi", "E.T.", "Toy Story"]
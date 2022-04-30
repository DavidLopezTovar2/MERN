
const student = {
    firstName: 'David',
    lastName: 'Lopez',
    age: 24,
    favoriteLanguages: ['python','JavaScript','c++']
}

const { firstName, favoriteLanguages } = student;
console.log(firstName);

const[,secondFavoriteLanguage] = favoriteLanguages;
console.log(secondFavoriteLanguage);

const student2 = {...student, firstName: 'Steven', hobbies: ['Footbal','Valorant']} 
console.log(student2);

// REST

const {age, favoriteLanguages, ...rest} = student;
console.log(rest);


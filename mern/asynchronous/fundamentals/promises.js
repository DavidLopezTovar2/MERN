
const isBreadAvailable = true;
var quantityBreads = 10;

const buyBread = new Promise((resolve,reject) => {
    if(isBreadAvailable){
        const response = {
            msg: 'Here it is the bread',
            isAvailable: isBreadAvailable
        }
        resolve(response);
    } else {
        const error = new Error('Sorry, no bread');
        reject(error);
    }
});

const breadsAvailableInBakery = new Promise((resolve,reject) => {
    const breadsInBakery = 5;
    if (quantityBreads > breadsInBakery) {
        resolve(quantityBreads);
    }else{
        const err = new Error('No enough breads');
        reject(err);
    }
});

// ES5
const oncePrep = () => {
    console.log('I went trough here');
    buyBread
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    console.log('At the end');
}

//ES7
const oncePrepAsync = async() => {
    try{
        const response = await buyBread;
        console.log(response);
        return response;
    }catch(err){
        console.log(err);
    }
}

const goToBakeryBread = async() => {
    try{
        const response = await breadsAvailableInBakery;
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

//oncePrep();
//oncePrepAsync();
goToBakeryBread();

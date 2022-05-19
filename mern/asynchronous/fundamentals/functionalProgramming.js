//Ser transparentes
//Ser puras
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [{
    id: 1,
    taxNumber: '86620855',
    name: 'HECTOR ACUÑA BOLAÑOS'
},
{
    id: 2,
    taxNumber: '7317855K',
    name: 'JESUS RODRIGUEZ ALVAREZ'
},
{
    id: 3,
    taxNumber: '73826497',
    name: 'ANDRES NADAL MOLINA'
},
{
    id: 4,
    taxNumber: '88587715',
    name: 'SALVADOR ARNEDO MANRIQUEZ'
},
{
    id: 5,
    taxNumber: '94020190',
    name: 'VICTOR MANUEL ROJAS LUCAS'
},
{
    id: 6,
    taxNumber: '99804238',
    name: 'MOHAMED FERRE SAMPER'
}
];
const accounts = [{
    clientId: 6,
    bankId: 1,
    balance: 15000
},
{
    clientId: 1,
    bankId: 3,
    balance: 18000
},
{
    clientId: 5,
    bankId: 3,
    balance: 135000
},
{
    clientId: 2,
    bankId: 2,
    balance: 5600
},
{
    clientId: 3,
    bankId: 1,
    balance: 23000
},
{
    clientId: 5,
    bankId: 2,
    balance: 15000
},
{
    clientId: 3,
    bankId: 3,
    balance: 45900
},
{
    clientId: 2,
    bankId: 3,
    balance: 19000
},
{
    clientId: 4,
    bankId: 3,
    balance: 51000
},
{
    clientId: 5,
    bankId: 1,
    balance: 89000
},
{
    clientId: 1,
    bankId: 2,
    balance: 1600
},
{
    clientId: 5,
    bankId: 3,
    balance: 37500
},
{
    clientId: 6,
    bankId: 1,
    balance: 19200
},
{
    clientId: 2,
    bankId: 3,
    balance: 10000
},
{
    clientId: 3,
    bankId: 2,
    balance: 5400
},
{
    clientId: 3,
    bankId: 1,
    balance: 9000
},
{
    clientId: 4,
    bankId: 3,
    balance: 13500
},
{
    clientId: 2,
    bankId: 1,
    balance: 38200
},
{
    clientId: 5,
    bankId: 2,
    balance: 17000
},
{
    clientId: 1,
    bankId: 3,
    balance: 1000
},
{
    clientId: 5,
    bankId: 2,
    balance: 600
},
{
    clientId: 6,
    bankId: 1,
    balance: 16200
},
{
    clientId: 2,
    bankId: 2,
    balance: 10000
}
]
const banks = [{
    id: 1,
    name: 'SANTANDER'
},
{
    id: 2,
    name: 'CHILE'
},
{
    id: 3,
    name: 'ESTADO'
}
];

/*
SECCIÓN PROBLEMAS
- Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
- Se debe programar un algoritmo para cada método y que este retorne lo requerido.
- Debe usar nombres explicativos para sus variables.
- Usar sintaxis ES6.
*/

// 0 Arreglo con los ids de clientes
const listClientsIds = () => clients.map(client => client.id);

// 1 Arreglo con los ids de clientes ordenados por rut
const listClientsIdsSortByTaxNumber = () => clients.map(client => client.taxNumber).sort();

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
const sortClientsTotalBalances = () => {
    return clients.map(client => {
        let balance = 0;
        accounts.map(account => {
            if(client.id === account.clientId){
                return balance += account.balance;
            }
        })
        return {
            ...client,
            balance
        }
    }).sort((a,b ) => b.balance - a.balance).map(_client => _client.name);
}

// 3. Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
const banksClientsTaxNumbers = () => {
    return banks.map(bank => {
        let _clients = [];
        accounts.filter(account => {
            if(bank.id === account.bankId) {
                clients.map(client => {
                    if(client.id === account.clientId) {
                        _clients.push(client);
                    } 
                })
            }
        })
        _clients.sort((a, b) => a.name.localeCompare(b.name));
        let clientsRut = _clients.map(client => client.taxNumber);
        return {
            [bank.name]: clientsRut
        }
    })
}

// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
const richClientsBalances = () =>{
    let idSantander;
    banks.map(bank => {
        if (bank.name === 'SANTANDER') {
            idSantander = bank.id;
        }
    });
    let clientsOver = [];
    clients.filter(client => {
        let sum = 0;
        accounts.map(account => {
            if (client.id === account.clientId && account.bankId === idSantander) {
                return sum += account.balance;
            }
        })
        if (sum > 25000) {
            clientsOver.push(sum);
        }
    })
    return clientsOver.sort((a, b) => b - a);
}

// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
const banksRankingByTotalBalance = () => {
    return banks.map(bank =>{
        let sum = 0;
        accounts.map(account => {
            if (account.bankId === bank.id) {
                sum += account.balance;
            }
        })
        return{
            total: sum,
            bankId: bank.id
        }
    }).sort((a,b) => b.total - a.total).map(bank => bank.bankId);
}

// 6 Objeto en que las claves sean los nombres de los bancos y
// los valores el número de clientes que solo tengan cuentas en ese banco.
const banksFidelity = () =>{
    return banks.map(bank =>{
        let _clients = 0;
        clients.map(client =>{
            let _banks = 0;
            accounts.map(account =>{
                if (account.clientId === client.id && account.bankId != bank.id) {
                    _banks ++;
                }
            })
            if (_banks === 0) {
                _clients++;
            }
        })
        return{
            [bank.name]: _clients
        }
    })
}

// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
const banksPoorClients = () => {
    return banks.map(bank =>{
        let _accounts = accounts.filter(account =>{
            if (bank.id === account.bankId) {
                return account;
            }
        })
        for (let i = 0; i < _accounts.length; i++) {
            for (let j = i; j < _accounts.length; j++) {
                if (_accounts[i].clientId == _accounts[j].clientId) {
                    if (i != j) {
                        _accounts[i].balance += _accounts[j].balance;
                        _accounts[j].balance = 0;
                    }
                }                
            }          
        }
        _accounts = _accounts.filter(account =>{
            if (account.balance != 0) {
                return account;
            }
        }).sort((a,b) => a.balance - b.balance);
        return{
            [bank.name]: _accounts[0].clientId
        }
    })
}

// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado. 
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
const newClientRanking = () =>{
    const client = new Object();
    client.id =  7;
    client.taxNumber =  '99801111';
    client.name =  'DAVID LOPEZ TOVAR';
    clients.push(client);

    const account = new Object();
    account.clientId =  7;
    account.bankId =  3;
    account.balance =  9000;
    accounts.push(account);
    const clientsSorted = sortClientsTotalBalances();

    let position;
    clientsSorted.filter((clientSorted, index) => {
        if (clientSorted === client.name) {
            position = `${index}`;
            return position;
        }
    })
    return position;
}

// Impresión de soluciones. No modificar.
console.log('Pregunta 0');
console.log(listClientsIds());
console.log('Pregunta 1');
console.log(listClientsIdsSortByTaxNumber());
console.log('Pregunta 2');
console.log(sortClientsTotalBalances());
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
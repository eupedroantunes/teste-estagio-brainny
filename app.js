import moment from 'moment';
import { clients } from './Clients.js'

export function filterClients(arr, letter) {
    return arr.filter((el) => el.name.split("")[0] == letter)
}

export const clientName = () => clients.forEach(element => {
    console.log(`Cliente: ${element.name.toUpperCase()}`)
});

export function clientByIndex() {
    for (let index = 0; index < clients.length; index++) {
        console.log(`Cliente ${index + 1}: ${clients[index].name.toUpperCase()}`)
    }
}

export function filterFirstName(arr, firstName) {
   return arr.filter((el) => el.name.split(" ")[0] == firstName)
}

export const plus18Year = () => {
    let today = new Date()
    const adult = new Date(today).setFullYear((today.getFullYear() - 18))
    
    const over18 = [];
    
    for (let index = 0; index < clients.length; index++) {
        if (!moment(clients[index].birth).isAfter(adult)) {
            over18.push(clients[index])
        }
    }

    console.log(over18)
    console.log(`Número de clientes acima de 18 anos de idade: ${over18.length}`)
}

export const purchaseTotal = () => {
    let countPurchaseTotal = clients.map(({ countPurchase }) => ({ countPurchase }));
    const sum = countPurchaseTotal.reduce(
        (previousValue, currentValue) => previousValue + currentValue.countPurchase,
        0,
    );
    console.log(`Número total de compras realizadas: ${sum}`)
}

export const clientDontBuy = () => {
    let today = new Date()
    const lastYear = new Date(today).setFullYear((today.getFullYear() - 1))
    
    const lastBuy = clients.filter(({lastPurchaseDate}) => lastPurchaseDate < lastYear);
    
    console.log("-".repeat(100) + "\n" + "Última Compra:")
    console.log(lastBuy)
    console.log(`Número de clientes que não compram há mais de um 1 ano: ${lastBuy.length}`)
}

export const loyalClients = () => {
    const countMoreThan15 = clients.filter(function (element) {
        return element.countPurchase > 15
    })
    
    console.log(countMoreThan15)
    console.log(`Número de clientes fiéis: ${countMoreThan15.length}`)
}
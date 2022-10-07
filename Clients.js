import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'


export const clients = [];


for (let index = 0; index < 1000; index++) {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`
    const birth = faker.date.between('01-01-1910', '01-01-2006')
    const genre = faker.name.sexType()
    const countPurchase = Math.floor(Math.random() * 30)
    let lastPurchaseDate;
    if (countPurchase == 0) {
        lastPurchaseDate = "Nenhuma compra realizada"
    } else {
        lastPurchaseDate = faker.date.recent(730)
    }

    const client = {
        name,
        birth,
        genre,
        countPurchase,
        lastPurchaseDate
    }

    clients.push(client)
}
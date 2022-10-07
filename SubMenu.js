import PromptSync from "prompt-sync";
import { clientByIndex, clientDontBuy, clientName, filterClients, filterFirstName, loyalClients, plus18Year, purchaseTotal } from './app.js'
import { clients } from './Clients.js'

const keyboard = PromptSync()

const clientStore = () => {
    const name = keyboard("Qual o nome do cliente? ")
    const birth = keyboard("Qual a data de nascimento do cliente? ")
    const genre = keyboard("Qual o sexo do cliente? ")
    const countPurchase = 0
    let lastPurchaseDate;
    if (countPurchase == 0) {
        lastPurchaseDate = "Nenhuma compra realizada"
    }

    const birthday = new Date(birth.split("/")[2], (birth.split("/")[1] - 1), birth.split("/")[0])

    const newClient = {
        name,
        birthday,
        genre,
        countPurchase,
        lastPurchaseDate
    }

    clients.splice(0, 0, newClient)
}

export const clientSearch = () => {
    console.log("-".repeat(40))
    console.log("Que ação você deseja realizar: ")
    console.log("1. Todos os clientes")
    console.log("2. Clientes por Index")
    console.log("3. Filtrar por Letra Inicial")
    console.log("4. Filtrar Clientes maiores de idade")
    console.log("5. Filtrar Clientes por nome")
    console.log("6. Inserir novos Clientes")
    const option = +keyboard("Digite a opcão desejada: ")

    if (option == 1) {
        console.log("-".repeat(40))
        console.log(clientName())
    } else if (option == 2) {
        console.log("-".repeat(40))
        console.log(clientByIndex())
    } else if (option == 3) {
        console.log("-".repeat(40))
        const firstLetter = keyboard("Digite a letra inicial deseja: ")
        const clientsLetter = filterClients(clients, firstLetter.toUpperCase())
        console.log(clientsLetter)
        console.log(`Número de registros com a letra ${firstLetter.toUpperCase()}: ${clientsLetter.length}`)
    } else if (option == 4) {
        console.log("-".repeat(40))
        plus18Year()
    } else if (option == 5) {
        console.log("-".repeat(40))
        const firstName = keyboard("Digite um nome: ")
        const result = filterFirstName(clients, firstName)
        if (result == 0) {
            console.log(`Nenhum registro com o nome ${firstName} na lista de clientes`)
        } else {
            console.log(result)
            console.log("-".repeat(40) + "\n" + `Número de registros com o nome ${firstName} encontrados: ${result.length} `)
        }
    } else if (option == 6) {
        console.log(clientStore())
    } else {
        console.log("Opção inválida!")
        return
    }
}

export const purchaseData = () => {
    console.log("-".repeat(40))
    console.log("Que ação você deseja realizar: ")
    console.log("1. Mostrar número total de compras")
    console.log("2. Clientes há mais de um ano sem compras")
    console.log("3. Cliente com mais de 15 compras")
    const option = +keyboard("Digite a opcão desejada: ")

    if (option == 1) {
        console.log("-".repeat(40))
        console.log(purchaseTotal())
    } else if (option == 2) {
        console.log("-".repeat(40))
        console.log(clientDontBuy())
    } else if (option == 3) {
        console.log("-".repeat(40))
        console.log(loyalClients())
    } else {
        console.log("Opção inválida")
        return
    }
}
import PromptSync from 'prompt-sync'
import { clientSearch, purchaseData } from './SubMenu.js'

const teclado = PromptSync()

do {
    console.log("\nClientes")
    console.log("=".repeat(40))
    console.log("1. Filtros por cliente")
    console.log("2. Filtros por compras")
    console.log("9. Finalizar")
    const option = +teclado("Escolha uma opção: ")

    if (option == 1) {
        clientSearch()
    } else if (option == 2) {
        purchaseData()
    } else if (option == 9) {
        break
    } else {
        console.log("Opção inválida. Tente De novo!")
    }

} while (true)
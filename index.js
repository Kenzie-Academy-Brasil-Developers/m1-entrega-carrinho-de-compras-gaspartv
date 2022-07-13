function estrutura() {
    let body = document.body
    let main = document.createElement("main")
    body.appendChild(main)
    let sectionCarrinho = document.createElement("section")
    sectionCarrinho.classList.add("carrinhoSection")
    main.appendChild(sectionCarrinho)
    let h1 = document.createElement("h1")
    h1.innerText = "Virtual Market"
    let ulTopo = document.createElement("ul")
    ulTopo.classList.add("topoLista")
    let liItem = document.createElement("li")
    liItem.innerText = "Item"
    let liValor = document.createElement("li")
    liValor.innerText = "Valor"
    ulTopo.append(liItem, liValor)
    let sectionLista = document.createElement("section")
    sectionLista.id = "listaProdutos"
    let ulTotal = document.createElement("ul")
    ulTotal.classList.add("totalLista")
    let liTotal = document.createElement("li")
    liTotal.innerText = "Total"
    let livalorTotal = document.createElement("li")
    livalorTotal.id = "valorTotal"
    ulTotal.append(liTotal, livalorTotal)
    let btn = document.createElement("button")
    btn.classList.add("btnFinalizar")
    btn.innerText = "Finalizar compra"
    sectionCarrinho.append(h1, ulTopo, sectionLista, ulTotal, btn)
}

function carrinho(produtos) {
    let lista = document.getElementById("listaProdutos")
    let valorTotal = document.getElementById("valorTotal")
    let valorFinal = 0

    for (let i = 0; i < produtos.length; i++) {
        valorFinal += produtos[i].price

        let ul = document.createElement("ul")
        ul.classList.add("lista")

        let liNome = document.createElement("li")
        liNome.innerText = produtos[i].name

        let preco = produtos[i].price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
        let liValor = document.createElement("li")
        liValor.innerText = preco

        lista.appendChild(ul)
        ul.append(liNome, liValor)

        valorTotal.innerText = valorFinal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    }
}

estrutura()
carrinho(produtos)
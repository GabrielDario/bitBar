let numMesas = [];
let produtosLista = [];
let precoLista = [];
function qntMesas() {
    let numMesasHTML = document.getElementById("numMesas").value;
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");

    if (numMesasHTML > 0 && numMesasHTML <= 50) {
        mesas.style.display = "none";
        produtos.style.display = "block";
        for (let i = 1; i <= numMesasHTML; i++) {
            numMesas.unshift([]);
        }
        console.log(numMesas)
    } else {
        alert("Entre 0 e 50 mesas!")
    }

}

function cadastrarProdutos() {
    let nomeProduto = document.getElementById("nomeProduto").value;
    let precoProduto = document.getElementById("precoProduto").value;
    let pProduto = document.getElementById("pProduto");
    let pValor = document.getElementById("pValor");
    let tabela = document.getElementById("tabela");
    let tr = document.createElement('tr');

    var validacaoProdutos = nomeProduto !== null && nomeProduto !== undefined && nomeProduto !== ""
        && precoProduto > 0;

    if (validacaoProdutos) {
        document.getElementById("nomeProduto").value = "";
        document.getElementById("precoProduto").value = "";
        nomeProduto = nomeProduto.toUpperCase();

        produtosLista.push([nomeProduto]);
        precoLista.push([precoProduto]);

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
     
        tr.appendChild(td);
        tr.appendChild(td2);
        // Adding the entire table to the body tag
        document.getElementById('tabela').appendChild(tr);

        td.textContent = td.textContent + `${nomeProduto} \n`
        td2.textContent = td2.textContent + `R$ ${precoProduto} \n`
        console.log(produtosLista);
        console.log(precoLista);
        alert("Cadastrado");
    } else {

        alert("Cadastrado errado!");
    }

}

let numMesas = [];
let produtosLista = [];
let precoLista = [];
let numMesasHTML;
var numeroMesas = 1;

function qntMesas() {
    numMesasHTML = document.getElementById("numMesas").value;
    let mesas = document.querySelector(".mesas");
    let todasAsMesas = document.querySelector(".todasAsMesas");
    let produtos = document.querySelector(".produtos");

    if (numMesasHTML > 0 && numMesasHTML <= 50) {
        mesas.style.display = "none";
        todasAsMesas.style.display = "none";
        produtos.style.display = "block";
        for (let i = 1; i <= numMesasHTML; i++) {
            numMesas.unshift([]);
        }
    } else {
        alert("Entre 0 e 50 mesas!")
    }

}

function irProdutos() {
    let todasAsMesas = document.querySelector(".todasAsMesas");
    let comandar = document.querySelector(".comandar");
    let produtos = document.querySelector(".produtos");
    comandar.style.display = "none";
    todasAsMesas.style.display = "none";
    produtos.style.display = "block";
}
function adicionarProdutos() {
    let nomeProduto = document.getElementById("nomeProduto").value;
    let precoProduto = document.getElementById("precoProduto").value;


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
        alert("Cadastrado");
    } else {
        alert("Cadastrado errado!");
    }

}

function irMesas() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");

    comandar.style.display = "none";
    mesas.style.display = "none";
    produtos.style.display = "none";
    numMesasHTML.style.display = "block";


    while (numeroMesas <= numMesas.length) {
        let btn = document.createElement("button");

        btn.innerHTML = numeroMesas;
        btn.value = numeroMesas;
        btn.type = "submit";
        btn.name = "button";
        btn.id = "mesa" + numeroMesas;
        document.querySelector('.todasAsMesas').appendChild(btn);
        if (numeroMesas % 5 == 0) {
            let br = document.createElement("br");
            document.querySelector('.todasAsMesas').appendChild(br);
        }
        numeroMesas++;
    }
}

function comandar() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");

    numMesasHTML.style.display = "none";
    mesas.style.display = "none";
    produtos.style.display = "none";
    comandar.style.display = "block";
}
function lancarProduto() {
    let mesaComandar = document.getElementById("mesaComandar").value;
    let produtoNaListaHTML = document.getElementById("produtoNaLista").value;
    let idProdutoNaLista = document.getElementById("produtoNaLista");
    console.log(mesaComandar, produtoNaListaHTML);

    if (mesaComandar > 0 && mesaComandar <= numMesas.length) {

        for (let produtos = 0; produtos < produtosLista.length; produtos++) {

            let option = document.createElement('option');
            option.text = "Kiwi";
            idProdutoNaLista.add(option);
            
            console.log(produtosLista[produtos]);
        }
       console.log(produtosLista);
        alert("Lançado!");
    } else {
        alert("Cadastrado errado!");
    }
}

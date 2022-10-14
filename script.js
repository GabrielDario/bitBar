let numMesas = [];
let produtosLista = [];
let precoLista = [];
let numMesasHTML;
let numeroMesas = 1;
let contadorProdutos = 0;
let contadorComandar = 0;

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
        contadorProdutos = produtosLista.length;

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
function consultarMesa() {
    let numMesa = document.getElementById("numMesa").value;
    let consumo = document.getElementById("consumo");
    let gorgeta = document.getElementById("gorgeta");
    let total = document.getElementById("total");

    numMesa = Number(numMesa);

   // console.log(numMesas[numMesa].length);
    console.log(numMesa);
  //  console.log(numMesas);
    if (numMesa > 1 && numMesa <= numMesas.length) {
        numMesa = numMesa - 1;
        if (numMesas[numMesa].length === 0) {
            alert("Mesa vazia!");
        } else {
            alert("TEM ALGO AI!");
        }
    }else if(numMesa == 1) {
        if (numMesas[numMesa-1].length === 0) {
            alert("Mesa vazia!");
        } else {
            alert("TEM ALGO AI!");
        }
    } else {
        alert("Mesa invalida!");
    }
  
}
function comandar() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");
    let idProdutoNaLista = document.getElementById("produtoNaLista");

    numMesasHTML.style.display = "none";
    mesas.style.display = "none";
    produtos.style.display = "none";
    comandar.style.display = "block";

    if (produtosLista.length === 0) {
        alert("Nenhum produto cadastrado");
    }
    if (contadorComandar === 0) {
        for (let produto = 0; produto < produtosLista.length; produto++) {

            let option = document.createElement("option");
            option.text = produtosLista[produto];
            option.value = precoLista[produto];
            idProdutoNaLista.add(option);
            contadorComandar = contadorComandar + 1;

        }

    }
    if (contadorProdutos > contadorComandar) {
        for (let produto = contadorComandar; produto < contadorProdutos; produto++) {
            let option = document.createElement("option");
            option.text = produtosLista[produto];
            option.value = precoLista[produto];
            idProdutoNaLista.add(option);
            contadorComandar = contadorComandar + 1;
        }
    }

}

function lancarProduto() {
    let mesaComandar = document.getElementById("mesaComandar").value;
    let produtoNaLista = document.getElementById("produtoNaLista").value;
    mesaComandar = Number(mesaComandar);


    if (mesaComandar > 0 && mesaComandar < numMesas.length) {
        alert("Produto comandado");
        mesaComandar = mesaComandar - 1;
        numMesas[mesaComandar].push([produtoNaLista]);

    } else if (mesaComandar === numMesas.length) {
        alert("Ultima mesa");
        mesaComandar = mesaComandar - 1;
        numMesas[mesaComandar].push([produtoNaLista]);


    } else {
        alert("Não existe essa mesa!");
    }
    console.log(numMesas);
}

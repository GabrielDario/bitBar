let numMesas = []; // todas as mesas
let produtosLista = []; //produtosCadastrados
let precoLista = []; //Valor dessa lista
let numMesasHTML;
let numeroMesas = 1; //variavel para fazer os botões da mesa
let contadorProdutos = 0; //Variavel contadora para toda vez que abrir 'comandar'verificar se foi adicionado mais coisa
let contadorComandar = 0; //Comparar com a contadorProdutos 
let buttonPintar; // Para pintar as mesas que tem algo cadastrado
let extratoGeral = 0; //Receita do restaurante

//Função para saber quantas mesas serão adicionadas
function qntMesas() {
    //elementos HTML que quero manipular (mostrar,não mostrar...)
    numMesasHTML = document.getElementById("numMesas").value;
    let mesas = document.querySelector(".mesas");
    let todasAsMesas = document.querySelector(".todasAsMesas");
    let produtos = document.querySelector(".produtos");

    //se o valor for entre 0 e 50
    if (numMesasHTML > 0 && numMesasHTML <= 50) {
        mesas.style.display = "none";  //Apenas para alterar html(3)
        todasAsMesas.style.display = "none";
        produtos.style.display = "block";
        //Criar lista vazias até o número que o usuário colocou
        for (let i = 1; i <= numMesasHTML; i++) {
            numMesas.unshift([]);
        }
    } else {
        alert("Entre 0 e 50 mesas!"); //Valor incorreto
    }

}

//Para adicionar produtos do restaurante(HTML)
function irProdutos() {
    let todasAsMesas = document.querySelector(".todasAsMesas"); //Somente manipulando css e html
    let comandar = document.querySelector(".comandar");//no javascript (mostrar uma classe e tiras as outras)
    let produtos = document.querySelector(".produtos");
    let extrato = document.querySelector(".extrato");

    comandar.style.display = "none";
    todasAsMesas.style.display = "none";
    extrato.style.display = "none";
    produtos.style.display = "block";
}

//Adicionando produtos na lista
function adicionarProdutos() {
    //Variáveis a serem pegar
    let nomeProduto = document.getElementById("nomeProduto").value;
    let precoProduto = document.getElementById("precoProduto").value;

    //Para o produto ser válido,precisa dessas condições
    var validacaoProdutos = nomeProduto !== null && nomeProduto !== undefined && nomeProduto !== ""
        && precoProduto > 0;

    if (validacaoProdutos) { //se as condições forem verdadeiras,adicionar
        document.getElementById("nomeProduto").value = ""; //Esvaziar textos quando cadastrar
        document.getElementById("precoProduto").value = ""; //deixando ele vazio
        nomeProduto = nomeProduto.toUpperCase(); //Convertendo para tudo maiusculo

        produtosLista.push([nomeProduto]); //Adicionamento nome do produto em uma lista
        precoLista.push([precoProduto]);//Adicionamento valor do produto em outra lista

        //Criando td e tr dentro da tabela(#tabela) já criada no html
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td2 = document.createElement('td');

        tr.appendChild(td); // quem vai ser em cima do outro
        tr.appendChild(td2);

        document.getElementById('tabela').appendChild(tr);

        td.textContent = td.textContent + `${nomeProduto} ` //adicionando e adicionando sempre o anterior
        td2.textContent = td2.textContent + `R$ ${precoProduto} ` // para não apagar
        contadorProdutos = produtosLista.length;

        alert("Cadastrado");
    } else {
        alert("Cadastrado errado!");
    }

}

//Apenas mostrar no html e adicionar botão para mesa
function irMesas() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");
    let extrato = document.querySelector(".extrato");

    extrato.style.display = "none";
    comandar.style.display = "none";
    mesas.style.display = "none";
    produtos.style.display = "none";
    numMesasHTML.style.display = "block"; //Mostrar essa div e apagar as anteriores

    //enquanto o numeroMesas(começa com 1) não for igual a números de mesas total,faça
    while (numeroMesas <= numMesas.length) {
        let btn = document.createElement("button"); //cria um botão

        btn.innerHTML = numeroMesas; //numero da mesa
        btn.value = numeroMesas;
        btn.type = "submit";
        btn.name = "button";
        btn.id = "mesa" + numeroMesas; //dar id no button (USAR MAIS PARA FRENTE)
        document.querySelector('.todasAsMesas').appendChild(btn); //Definindo classe pai e filha
        if (numeroMesas % 5 == 0) { //quando der 5 mesas,ele vai quebrar linha com <br>
            let br = document.createElement("br");
            document.querySelector('.todasAsMesas').appendChild(br);
        }
        numeroMesas++; // adicionando +1 nessa variavel
    }
}

function fecharMesa() {
    let numMesa = document.getElementById("numMesa").value; //pegar valor num mesa no html
    numMesa = Number(numMesa);
   
    if (numMesa > 1 && numMesa <= numMesas.length) { //Verificar se a mesa é válida (entre 1 e o máximo)
        //Se for válido...
        numMesa = numMesa - 1; // converter número e tirar 1 porque a lista começa com 0
        for (let produtos = 0; produtos < numMesas[numMesa].length; produtos++) { //percorer lista de mesas dentro da mesa
            let addValorExtrato = Number(numMesas[numMesa][produtos]);//variável local para armazenar uma por uma
            let taxa = document.getElementById("taxa").value;
            if(taxa === "com") { // se tiver taxa de serviço
                   let gorgetaValor = addValorExtrato * 0.1; // faz valor vezes 0,1
                   addValorExtrato = addValorExtrato + gorgetaValor; // soma o valor total com valor multiplicado por 0,1
                   extratoGeral = extratoGeral + addValorExtrato;  // adicionando  na variavel global
            } else {
                extratoGeral = extratoGeral + addValorExtrato;   // adicionando  na variavel global
            }
       
        }
       
        for (let produtos = 0; produtos <= numMesas[numMesa].length; produtos++) {//For para removar todos os produtos da mesa e fechar conta
         
            numMesas[numMesa].shift();
            alert("Mesa paga!");
            document.getElementById("consumo").textContent = "Mesa vazia";
            document.getElementById("gorgeta").textContent = "";
            document.getElementById("total").textContent = "";

            let nomeButton = "mesa" + (numMesa+1); //Criar botao com nome mesaX
            buttonPintar = document.getElementById(nomeButton); //aonde X é o numero da mesa

            buttonPintar.style.backgroundColor = "aliceblue"; //pintar o button da mesa em si
        }

    } else if (numMesa == 1) {
        for (let produtos = 0; produtos < numMesas[numMesa].length; produtos++) { //percorer lista de mesas dentro da mesa
            let addValorExtrato = Number(numMesas[numMesa][produtos]);//variável local para armazenar uma por uma
            let taxa = document.getElementById("taxa").value;
            if(taxa === "com") { // se tiver taxa de serviço
                   let gorgetaValor = addValorExtrato * 0.1; // faz valor vezes 0,1
                   addValorExtrato = addValorExtrato + gorgetaValor; // soma o valor total com valor multiplicado por 0,1
                   extratoGeral = extratoGeral + addValorExtrato;  // adicionando  na variavel global
            } else {
                extratoGeral = extratoGeral + addValorExtrato;   // adicionando  na variavel global
            }
    
        }
       
        for (let produtos = 0; produtos <= numMesas[numMesa].length; produtos++) {//For para removar todos os produtos da mesa e fechar conta
         
            numMesas[numMesa].shift();
            alert("Mesa paga!");
            document.getElementById("consumo").textContent = "Mesa vazia";
            document.getElementById("gorgeta").textContent = "";
            document.getElementById("total").textContent = "";

            let nomeButton = "mesa" + (numMesa+1); //Criar botao com nome mesaX
            buttonPintar = document.getElementById(nomeButton); //aonde X é o numero da mesa

            buttonPintar.style.backgroundColor = "aliceblue"; //pintar o button da mesa em si
        }

    } else {
        alert("Mesa invalida!");
    }
}

//Ver consumo da mesa
function consultarMesa() {
    let numMesa = document.getElementById("numMesa").value;
    let consumo = document.getElementById("consumo");
    let gorgeta = document.getElementById("gorgeta");
    let consultar = document.getElementById("consultar");
    let total = document.getElementById("total");
    let valorTotal = 0; //inicializando como 0 para interpretar como Number
    let gorgetaValor = 0;
    numMesa = Number(numMesa); //Converter o valor input em number

    if (numMesa > 1 && numMesa <= numMesas.length) { //Se ela for entre 2 e ultima mesa
        numMesa = numMesa - 1;  // tirar -1 para comparar com a lista que começa com 0

        if (numMesas[numMesa].length === 0) {
            alert("Mesa vazia!"); //Nenhum produto comandado na mesa
            document.getElementById("consultar").textContent = `CONTA DA MESA ${numMesa+1}`;
            document.getElementById("consumo").textContent = "Mesa vazia";
            document.getElementById("gorgeta").textContent = "";
            document.getElementById("total").textContent = "";
        
        } else {
            //percorer todas as listar dentro da lista da mesa
            for (let percorrendoMessas = 0; percorrendoMessas < numMesas[numMesa].length; percorrendoMessas++) {
                let numeroDaVez = Number(numMesas[numMesa][percorrendoMessas]); //converter em  number
                valorTotal = valorTotal + numeroDaVez; // adicionando preço da conta
            }

            consultar.textContent = `CONTA DA MESA ${numMesa + 1}`;
            //Adicionando valor total
            consumo.textContent = `CONSUMO: R$ ${valorTotal}`;
            //Adicionando valor do 10%
            gorgetaValor = valorTotal * 0.1;
            gorgeta.textContent = `TAXA DE SERVIÇO: R$ ${gorgetaValor.toFixed(2)}`;
            valorTotal = valorTotal + gorgetaValor;
            //Adicionando valor do Total com 10%
            total.textContent = `TOTAL: R$ ${valorTotal.toFixed(2)}`;

            //Mesma coisa se repete se mesa for 1
        }
    } else if (numMesa == 1) {
        if (numMesas[numMesa - 1].length === 0) {
            alert("Mesa vazia");
            document.getElementById("consultar").textContent = `CONTA DA MESA ${numMesa+1}`;
            document.getElementById("consumo").textContent = "Mesa vazia";
            document.getElementById("gorgeta").textContent = "";
            document.getElementById("total").textContent = "";
        } else {
            numMesa = 0;
            for (let percorrendoMessas = 0; percorrendoMessas < numMesas[numMesa].length; percorrendoMessas++) {
                let numeroDaVez = Number(numMesas[numMesa][percorrendoMessas]);
                valorTotal = valorTotal + numeroDaVez;
            }
            numMesa = numMesa + 1;
            consultar.textContent = `CONTA DA MESA ${numMesa}`;
            consumo.textContent = `CONSUMO: R$ ${valorTotal}`;
            gorgetaValor = valorTotal * 0.1;
            gorgeta.textContent = `TAXA DE SERVIÇO: R$ ${gorgetaValor.toFixed(2)}`;
            valorTotal = valorTotal + gorgetaValor;
            total.textContent = `TOTAL: R$ ${valorTotal.toFixed(2)}`;

        }
    } else {
        alert("Mesa invalida!");
    }

}

//Abrir HTML E MONTAR OPTION CONFORME OS PRODUTOS
function comandar() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");
    let extrato = document.querySelector(".extrato");
    let idProdutoNaLista = document.getElementById("produtoNaLista");

    numMesasHTML.style.display = "none";
    mesas.style.display = "none";
    extrato.style.display = "none";
    produtos.style.display = "none";
    comandar.style.display = "block";

    if (produtosLista.length === 0) {
        alert("Nenhum produto cadastrado");
    }
    if (contadorComandar === 0) {
        //Criar option em todos os produtos que cadastramos
        for (let produto = 0; produto < produtosLista.length; produto++) {
            let option = document.createElement("option");
            option.text = produtosLista[produto];
            option.value = precoLista[produto];
            idProdutoNaLista.add(option);
            contadorComandar = contadorComandar + 1;

        }

    }
    //Verificar se ele cadastrou algo
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

//Lançar produtos na mesa desejada
function lancarProduto() {
    let mesaComandar = document.getElementById("mesaComandar").value;
    let produtoNaLista = document.getElementById("produtoNaLista").value;
    mesaComandar = Number(mesaComandar);

    if (mesaComandar > 0 && mesaComandar < numMesas.length) {
        alert("Produto comandado");
        let nomeButton = "mesa" + mesaComandar; //Criar botao com nome mesaX
        buttonPintar = document.getElementById(nomeButton); //aonde X é o numero da mesa

        buttonPintar.style.backgroundColor = "#fa4"; //pintar o button da mesa em si
        mesaComandar = mesaComandar - 1; //CORRIGIR
        numMesas[mesaComandar].push(produtoNaLista); //Adicionamento produtos na mesa em si

    } else if (mesaComandar === numMesas.length) { //Para adicionar produto novo
        alert("Produto comandado");
        let nomeButton = "mesa" + mesaComandar;
        buttonPintar = document.getElementById(nomeButton);
    
        buttonPintar.style.backgroundColor = "#fa4";

        mesaComandar = mesaComandar - 1;
        numMesas[mesaComandar].push(produtoNaLista); //adicionar produto novo


    } else {
        alert("Não existe essa mesa!");
    }

}

function extrato() {
    let numMesasHTML = document.querySelector(".todasAsMesas");
    let mesas = document.querySelector(".mesas");
    let produtos = document.querySelector(".produtos");
    let comandar = document.querySelector(".comandar");
    let extrato = document.querySelector(".extrato");
    let valorTotal = document.getElementById("valorArrecadado");

    comandar.style.display = "none";
    mesas.style.display = "none";
    produtos.style.display = "none";
    numMesasHTML.style.display = "none";
    extrato.style.display = "block";

    //Inserir a variável valor total no htmk
    valorTotal.textContent = `Valor bruto gerado = R$ ${extratoGeral} Reais`
}
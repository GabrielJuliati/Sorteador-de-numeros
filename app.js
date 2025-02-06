function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value)
    let de = parseInt(document.getElementById("de").value)
    let ate = parseInt(document.getElementById("ate").value)

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
      }else if(quantidade > ate - de + 1){
        alert('Campo "Quantidade de números" deve ter um numero possivel de ser gerado entre o campo "Do número" e o campo "Até o número". Verifique!');
      }else{

      let sorteados = []

      for(let i = 0; i < quantidade; i++){
            let numero = obterNumeroAleatorio(de, ate)

            while(sorteados.includes(numero)){
               numero = obterNumeroAleatorio(de, ate)
           }

            sorteados.push(numero)
        }

     let resultado = document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
        alterarStatusBotao()
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar")
    let botaoSortear = document.getElementById("btn-sortear")
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado")
        botaoReiniciar.classList.add("container__botao")
        botaoSortear.classList.remove("container__botao")
        botaoSortear.classList.add("container__botao-desabilitado")
    }else{
        botaoReiniciar.classList.remove("container__botao")
        botaoReiniciar.classList.add("container__botao-desabilitado")
        botaoSortear.classList.remove("container__botao-desabilitado")
        botaoSortear.classList.add("container__botao")
    }
}

function reiniciar(){
    let resultado = document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    document.getElementById("quantidade").value = ''
    document.getElementById("de").value = ''
    document.getElementById("ate").value = ''
    alterarStatusBotao()
}
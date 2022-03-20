//Criando numero aleatorio
//Math.random() -> gera um numero aleatorio de 0,1 a 1
// parseInt -> remove as casas decimais deixando apenas o numero inteiro. ex: 0,2 fica =  2
var numeroSecreto = parseInt(Math.random() * 11);

//Criar variavel quantidade atual de tentativas, para usarmos depois
var quantidadeTentativa = 0;

function Atualizar(variavel) {
  if (variavel == "sim") {
    //atualizar a pagina
    document.location.reload(true);
  }
}

//aqui iniciamos a função onde estará toda a regra do jogo
function Chutar() {
  //criando variavel e pegando o endereço do elemento o Id resultado
  //usamos este elemento para colocarmos as msgs para a visualização do usuario
  //ex: você acertou, você errou, excedeu qntd tentativas
  var elementoResultado = document.getElementById("resultado");

  //Criando variavel
  //este elemento é o elemento do campo que usuario preenche para tentativa de acerto
  var chute = parseInt(document.getElementById("valor").value);

  //verificando a tentativa atual do usuario
  //a cada jogo, adicionamos 1  a variavel quantidadeTentativa
  //enquanto essa variavel quantidadeTentativa  for < 3 permitimos q o usuario continue tentando
  //quando for > 3 enviamos msg de qtde excedida
  if (quantidadeTentativa < 3) {
    quantidadeTentativa = quantidadeTentativa + 1;

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
      elementoResultado.innerHTML =
        "Errou, o número secreto era " + numeroSecreto;
    }
  } else {
    var elementoBotoes = document.getElementsByClassName("reiniciar");
    for (var i = elementoBotoes.length - 1; i > -1; i--) {
      elementoBotoes[i].removeAttribute("hidden");
    }
    elementoResultado.innerHTML =
      "Você excedeu a quantidade de tentativas. Deseja jogar novamente?";
  }
}

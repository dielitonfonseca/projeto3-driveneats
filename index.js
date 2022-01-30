function select(elemento) {
  if (elemento.querySelector(".almoco") !== null) {
    const elemento_selecionado = document.querySelector(
      ".prato-sessao .selecionado"
    );
    const icon_selected = document.querySelector(".prato-sessao .mostrar");
    if (elemento_selecionado !== null) {
      elemento_selecionado.classList.toggle("selecionado");
    }
    if (icon_selected !== null) {
      icon_selected.classList.toggle("mostrar");
    }
    
    elemento.querySelector(".icon-check").classList.add("mostrar");
    elemento.classList.add("selecionado");
  }

  if (elemento.querySelector(".bebida") !== null) {
    const elemento_selecionado = document.querySelector(
      ".drink-sessao .selecionado"
    );
    const icon_selected = document.querySelector(".drink-sessao .mostrar");
    if (elemento_selecionado !== null) {
      elemento_selecionado.classList.toggle("selecionado");
    }
    if (icon_selected !== null) {
      icon_selected.classList.toggle("mostrar");
    }
    elemento.querySelector(".icon-check").classList.add("mostrar");
    elemento.classList.add("selecionado");
  }

  if (elemento.querySelector(".sobremesa") !== null) {
    const elemento_selecionado = document.querySelector(
      ".sobremesa-sessao .selecionado"
    );
    const icon_selected = document.querySelector(".sobremesa-sessao .mostrar");
    if (elemento_selecionado !== null) {
      elemento_selecionado.classList.toggle("selecionado");
    }
    if (icon_selected !== null) {
      icon_selected.classList.toggle("mostrar");
    }
    elemento.querySelector(".icon-check").classList.add("mostrar");
    elemento.classList.add("selecionado");
  }

  if (
    document.querySelector(".sobremesa-sessao .selecionado") !== null &&
    document.querySelector(".drink-sessao .selecionado") !== null &&
    document.querySelector(".prato-sessao .selecionado") !== null
  ) {
    const meubut = document.querySelector(".barra-container button");
    meubut.toggleAttribute("disabled");
    meubut.innerHTML = "Fechar Pedido";
    meubut.classList.add("fechar-pedido");
  }
}

function teste() {
  alert("testado");
}

function fechar() {
  //calcular valores selecionados
  var valor_prato1 = [];
  var valor_prato2 = [];
  var valor_prato3 = [];
  var valor_prato1 = document
    .querySelector(".prato-sessao .selecionado .valor")
    .innerHTML.split(" ");
  var valor_prato2 = document
    .querySelector(".drink-sessao .selecionado .valor")
    .innerHTML.split(" ");
  var valor_prato3 = document
    .querySelector(".sobremesa-sessao .selecionado .valor")
    .innerHTML.split(" ");
  var valor_total =
    parseFloat(valor_prato1[1].replace(",", ".")) +
    parseFloat(valor_prato2[1].replace(",", ".")) +
    parseFloat(valor_prato3[1].replace(",", "."));

    /* var nome_prato1 = document.querySelector(
      ".prato-sessao .selecionado .titulo"
    ).innerHTML;
    var nome_prato2 = document.querySelector(
      ".bebida-sessao .selecionado .titulo"
    ).innerHTML;
    var nome_prato3 = document.querySelector(
      ".sobremesa-sessao .selecionado .titulo"
    ).innerHTML; */

  var nome = window.prompt("Por favor insira seu nome completo", "nome");
  var adress = window.prompt("Por favor insira seu Endereço", "Endereço");

  var pedido =
    "Olá, gostaria de fazer o pedido: " +
    "\n" +
    "-Prato: " +
    "Frango Yin Yang" +
    "\n" +
    "-Bebida: " +
    "Coquinha Gelada" +
    "\n" +
    "-Sobremesa: " +
    "Pudim" +
    "\n" +
    "Total: R$" +
    "27,70" +
    "\n" +
    "Nome: " +
    nome +
    "\n" +
    "Endereço: " +
    adress;

  var conversa = encodeURIComponent(pedido);
  window.open("https://wa.me/05598983480337?text=" + conversa);
}

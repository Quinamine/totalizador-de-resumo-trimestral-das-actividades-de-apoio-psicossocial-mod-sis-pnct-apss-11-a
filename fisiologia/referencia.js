"use strict"
const referencia = {
    retornarIndicador(inputTarget) {
        const indicadorOutput = document.querySelector(".reference__output--indicador");
        let indicador = inputTarget.parentElement.children[0].querySelector("span").textContent;
        indicadorOutput.value = indicador;
    },
    retornarFaixaEtariaEsexo(inputTarget) {
        const faixasEtarias = document.querySelectorAll(".seccao-1__header__linha-de-faixa-etaria span");
        const faixaEtariaOutput = document.querySelector(".reference__output--idade");
        const sexos = ["Masculino", "Feminino"];
        const sexoOutput = document.querySelector(".reference__output--sexo");
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetIndex;
        for(let i = 0; i < inputTargetAndSiblings.length; i++) {
            if(inputTargetAndSiblings[i] === inputTarget) inputTargetIndex = i - 1;
        }
        faixaEtariaOutput.value = faixasEtarias[inputTargetIndex].textContent;
        let sexoIndex = inputTargetIndex < 4 ? 0 : 1;
        sexoOutput.value = sexos[sexoIndex];

    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll("[data-totalgeral]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarIndicador(inputCelular);
            referencia.retornarFaixaEtariaEsexo(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;
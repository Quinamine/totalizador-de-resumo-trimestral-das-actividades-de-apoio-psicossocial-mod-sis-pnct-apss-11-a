"use strict"
const referencia = {
    retornarLinhaEcoluna(inputTarget) {
        const linhaOutput = document.querySelector(".reference__output--indicador");
        const colunaOutput = document.querySelector(".reference__output--idade");
        const indicadoresColunares = document.querySelectorAll(".seccao-1__header__linha-de-indicadores span");
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetColIndex = Number(inputTarget.parentElement.dataset.colindex);
        for(let i=0; i < inputTargetAndSiblings.length; i++)  {
            if(inputTargetAndSiblings[i] === inputTarget) inputTargetColIndex = i - 1;
        }
        let indicadorLinear = inputTarget.parentElement.children[0].querySelector("span");
        let indicadorColunar = indicadoresColunares[inputTargetColIndex];
        if(inputTarget.parentElement.matches(".ficha__seccao-2__linha-de-indicador-e-seu-input")) {
            indicadorLinear = inputTarget.parentElement.children[0];
            indicadorColunar = inputTarget.parentElement.parentElement.children[0].querySelector("span");
        }
        linhaOutput.innerHTML = indicadorLinear.textContent;
        colunaOutput.innerHTML = indicadorColunar.textContent;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll(".ficha__seccao input");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            if(!inputCelular.matches("[readonly]")) {
                referencia.retornarLinhaEcoluna(inputCelular);
            }
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;
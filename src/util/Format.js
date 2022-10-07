//Classe para padronizar 

class Format {


    static getCamelCase(text) {

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0]; // Percorre e traz um array com todas as chaves que ele encontra dentro de um objeto determinado
    }
}

class WhatsAppController {
    constructor() // Carregado ao atualizar a página
    {
        console.log("WhatsApp Controller OK ")
        this.loadElements();
        this.elementsPrototype();
    }



    //Capta cada ID do HTML, cria um atributo para ele, já apontando para o HTML com o forEACH. Depois, formata para camelCase. 
    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;
        })
    }

    elementsPrototype() {
        //Antes dos elementos serem HTML, eles são apenas Element. hide é o nome da propriedade do protótipo. 

        Element.prototype.hide = function () { //Função = ocultar 
            this.style.display = 'none';
        }

        Element.prototype.show = function () { //Função = exibir 
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function () { //Toggle é o interruptor, se estiver desligado, liga e vice-versa. 
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
        }
        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.styles[name] = styles[name];
            }
        }
        Element.prototype.addClass = function (name) {
            this.classList.add(name);
        }
        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
        }
        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
        }
    }
}
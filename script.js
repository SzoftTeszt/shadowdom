// clubs (♣), diamonds (♦), hearts (♥), and spades (♠)
class Card extends HTMLElement{
    constructor(){
        super();

        let card = document.createElement('div')
        card.className="card"

        let signs =['♣','♦','♥','♠']
        if (Number(this.dataset.sign)==1 || Number(this.dataset.sign)==2)
        {
            card.classList.add('red')
        }
            
        let sign= document.createElement('div')
        sign.className="sign"
        sign.innerHTML=signs[Number(this.dataset.sign)]

        let ertek= Number(this.dataset.ertek)
        let tisztek = ['J', 'Q', 'K']
       

        let number= document.createElement('div')
        number.className="number"
        if (ertek==1)  number.innerHTML='A'
        else if (ertek>10) number.innerHTML=tisztek[ertek-11]
        else number.innerHTML=ertek
        // number.innerHTML='A'

        let value= document.createElement('div')
        value.className="value"

        value.appendChild(sign)
        value.appendChild(number)

        card.appendChild(value)
        card.appendChild(sign.cloneNode(true))
        card.appendChild(value.cloneNode(true))

        let linkElem = document.createElement("link")
        linkElem.rel="stylesheet"
        linkElem.href="my-card.css"

        let shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(linkElem)
        shadow.appendChild(card)
    }
}
customElements.define('my-card',Card)
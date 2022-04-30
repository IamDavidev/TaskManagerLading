import wilson from '../assets/images/Wilson.png'
import cheyenne from '../assets/images/Cheyenne.png'
import alfredo from '../assets/images/alfredo.png'
import makenna from '../assets/images/makenna.png'

import more from '../assets/icons/more.svg'

const team = {
    wilson,
    cheyenne,
    alfredo,
    makenna
}

class CardTeam extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        .container{
            background:var(--bg--color--secondary);
        }
        .container{
            min-width:300px;
            display:flex;
            justify-content:space-between;
            padding:10px;
            border-radius:30px;
            width:100%;
            align-items:center;
        }
        .imgCardTeam{
            width:50px;
            height:50px;
        }
        .cardTeam{
            display:flex;
            gap:10px;
            align-items:center;
        }
        .teamRol{
            display:flex;
            flex-direction:column;
        }
        .teamRol > span{
            font-size:14px;
        }
        
        .nameTeam{
            font-family:"Libre Baskerville", serif;
        }
        .rolTeam{
            color:var(--color--secondary);
            font-weight:bold;
        }
    `;
    }

    connectedCallback() {
        this.team = this.getAttribute('team')
        this.name = this.getAttribute('name')
        this.rol = this.getAttribute('rol')
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${CardTeam.styles}</style>
    <article class='container'>
        <header class="cardTeam">
            <img src="${team[this.team]}" alt="${this.team}" class="imgCardTeam" />
            <div class="teamRol">
                <span class="nameTeam">${this.name}</span>
                <span class="rolTeam">${this.rol}</span>
            </div>
        </header>
        <span>  <img src="${more}" alt="more" />  </span>
    </article>
    `;
    }
}
customElements.define('card-team', CardTeam);
import tasks from '../assets/icons/tasks.svg'
import prioritization from '../assets/icons/prioritization.svg'
import time from '../assets/icons/time.svg'

const icons = {
    tasks,
    prioritization,
    time
}

class CardWhy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
      }
      .container{
          width:370px;
          height: 413px;
            dispaly:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            border-radius:30px;
            border:1px solid var(--color--primary);
      }
      .titleCard{
          font-size:30px;
          font-family:'Libre Baskerville', serif;
          font-weight:bold;
      }
      .contentCard{
          width:60%;
          margin:auto;    
      }
      .headerCard{
          margin:45px 0;
      }
    `;
    }

    connectedCallback() {
        this.icon = this.getAttribute('icon')
        this.title = this.getAttribute('title')
        this.content = this.getAttribute('content')
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${CardWhy.styles}</style>
     <article class='container'>
        <header class="headerCard">
            <img src="${icons[this.icon]}" alt="${this.icon}" class="iconCard"    />
        </header>
        <h3 class="titleCard">
            ${this.title}
        </h3>
        <p class="contentCard">
            ${this.content}
        </p>
     </article>
    `;
    }
}
customElements.define('card-why', CardWhy);
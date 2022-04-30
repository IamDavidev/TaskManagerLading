import '../components/CardWhy.js'

class WhyChooseUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
      }
      .container{
            margin-top:280px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
      }
      .titleWhy{
          font-size:70px;
          font-family:"Libre Baskerville", serif;
          font-weight:bold;
          width:13ch;
          padding:0;
          margin-bottom:40px
      }
      .titleWhy > span{
          color: var(--color--secondary);
     }
     .textWhy{
        font-size:20px;
        width:30ch;
     }
     .renderCards{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        gap:35px;
        margin:85px 0;
     }
      .btnWhy{
        padding:23.5px 40px;
        font-size:20px;
        font-weight:bold;
        background-color: var(--color--text);
        border-radius:10px;
        color:var(--color--primary);
     }
     @media (min-width:320px) and (max-width:768px){
         .container{
              margin-top:30px;
         }
         .titleWhy{
            font-size:40px;
         }
         .textWhy{
            width:auto;
         }
         .renderCards{
            gap:20px;
            flex-direction:column;
            padding:1rem;
            align-items:normal
         }
     }

    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${WhyChooseUs.styles}</style>
     <div class='container'>
        <h2 class="titleWhy">Brustask is not <span>Trello.</span></h2>
        <p class="textWhy">Brutask is efficient in its simplicity  - daily task & supervision</p>
        <div class="renderCards">
            <card-why
                icon="tasks"
                title="Add Tasks"
                content="add & update your daily tasks"
            ></card-why>
            <card-why
                icon="prioritization"
                title="prioritization"
                content="prioritise the most important task of the day "
            ></card-why>
            <card-why
                icon="time"
                title="Time boxsing"
                content="allocate time for each task"
            ></card-why>
        </div>
        <btn-task content="get started for free"></btn-task>
     </div>
    `;
    }
}
customElements.define('why-choose-us', WhyChooseUs);
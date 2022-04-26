class why extends HTMLElement {
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
        font-size:20px;
        text-align:center;

      }

      .whyTitle{
        font-size:70px;
        font-weight:bold;
        width:13ch;
        margin-bottom:40px;
        padding:0;
      }
      .whyText{
          width:40ch;
            padding:0;
      }

      .whyTitle span{
        color:var(--color--primary);
      }
      .whyBtn{
          padding:23.5px 40px;
          border:none;
          background:var(--color--text);
          color:var(--color--primary);
          font-weight:bold;
          border-radius:10px;
          margin-top:85px;
          font-size:20px;
      }

    `;

  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =/*html*/`
        <style>${why.styles}</style>
     <div class='container'>
        <h2 class="whyTitle">
            Brutask isn't a tool, it's a <span>Habit</span>
        </h2>
        <p class="whyText">
            The experience is pretty much like writing your daily tasks on a sticky note!!.   
        </p>
        <button class="whyBtn">
            check out our blog now!
        </button>
     </div>
    `;
  }
}
customElements.define('why-brutask', why);
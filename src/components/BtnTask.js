class BtnTask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/`
        :host{
      }
      .btnRender{
        margin: 70px 0;
        background-color:var(--color--text);
        color:var(--color--primary);
        font-weight:bold;
        font-size:20px;
        display:flex;
        align-items:center;
        padding:23px 40px;
        border:none;
        border-radius:10px;
        transition: all 0.3s ease-in-out;
      }
      .btnRender:hover{
        background-color:var(--color--primary);
        color: var(--color--text);
      }
      @media screen (min-width:320px ) and (max-width:768px){
        .btnRender{
            font-size:14px;
            padding:10px 20px; 
        }
      }
    `;
  }

  connectedCallback() {
    this.content = this.getAttribute('content');
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =/*html*/`
        <style>${BtnTask.styles}</style>
     <div class='container'>
        <div clas="contentBtn">
            <button class="btnRender">
                ${this.content}
            </button>
        </div>
     </div>
    `;
  }
}
customElements.define('btn-task', BtnTask);
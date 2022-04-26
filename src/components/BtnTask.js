class BtnTask extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
    `;
    }

    connectedCallback() {
        this.render();
        this.content = this.getAttribute('content');
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${BtnTask.styles}</style>
     <div class='container'>
        btn 
     </div>
    `;
    }
}
customElements.define('btn-task', BtnTask);
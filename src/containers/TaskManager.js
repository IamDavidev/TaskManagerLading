import '../layouts/NavBar.js'
import '../layouts/Header.js'

class TaskManager extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        .container{
            margin:0;
            padding:0;
        }
        .header-task{
            background:var(--bg--color);
            padding: 78px 130px;
            box-sizing:border-box;
            width:100%;
        }
        @media (min-width:320px)and (max-width:480px){
            .header-task{
                padding: 39px 0 ;
            }
        }
        @media (min-width:481px)and (max-width:1023px){
            .header-task{
                padding: 79px  30px;
            }
        }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${TaskManager.styles}</style>
     <div class='container'>
        <div class="header-task">
            <nav-bar></nav-bar>
            <header-task></header-task>
        </div>
     </div>
    `;
    }
}
customElements.define('task-manager', TaskManager);
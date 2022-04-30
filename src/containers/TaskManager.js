import '../layouts/NavBar.js'
import '../layouts/more.js'
import '../layouts/Header.js'
import '../layouts/gallery.js'
import '../layouts/why.js'
import '../layouts/WhyChooseUs.js'
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
        main{
            padding: 120px 130px;
        }
        @media (min-width:320px)and (max-width:480px){
            .header-task{
                padding: 39px 0 ;
            }
            main{
                padding: 0;
            }
        }
        @media (min-width:481px)and (max-width:1023px){
            .header-task{
                padding: 79px  30px;
            }
            main{
                padding: 60px 30px;
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
        <main>
            <!--TODO: component btn -->
            <gallery-task></gallery-task>
            <why-brutask></why-brutask>
            <why-choose-us></why-choose-us>
            <more-tasks></more-tasks>
        </main>
        <footer>

        </footer>
     </div>
    `;
    }
}
customElements.define('task-manager', TaskManager);
class YourTeam extends HTMLElement {
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
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${YourTeam.styles}</style>
     <div class='container'>
        <div class="contentTitle">
            <h2>
                How to use Brustak for your team 
            </h2>

        </div>
        <img src="" alt=""/>
        <p>
            start by asking your team members to add their daily tasks on Brustask.
            then, the manager can take a quick stand-up to understand  everyone's progress.
            for the day
        </p>
        <span>
            siddhita upare,founder - brucira
        </span>
        <button>
            get Started for free 
        </button>
     </div>
    `;
    }
}
customElements.define('your-team', YourTeam);
import teamImg from '../assets/images/Wilson.png'

class YourTeam extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        .container{
            margin-top:100px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            text-align:center;
        }
        .titleTeam{
            font-size:60px;
            font-wieght:bold;
            font-family: "Libre Baskerville", serif;
            width:15ch;
        }
        .imgYourTeam{
            width:122px;
            height:122px;
            border-radius:50%;
            object-fit:cover; 
        }
        .startYourTeam{
            font-size:18px;
            font-weight:500;
            width:30ch;
            line-height:1.5;
        }
        .nameYourTeam{
            font-size:18px;
            font-weight:500;
            opacity: .5;
            margin:40px 0;
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
            <h2 class="titleTeam">
                How to use Brustak for your team 
            </h2>
        </div>
        <img src="${teamImg}" alt="team member" class="imgYourTeam"/>
        <p class="startYourTeam">
            start by asking your team members to add their daily tasks on Brustask.
            then, the manager can take a quick stand-up to understand  everyone's progress.
            for the day
        </p>
        <span class="nameYourTeam">
            siddhita upare,founder - brucira
        </span>
        <btn-task content="Get Started for free"></btn-task>
     </div>
    `;
    }
}
customElements.define('your-team', YourTeam);
import '../components/CardTeam.js'
import tasksImg from '../assets/icons/pick.svg'

class more extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

        }
        .container{
          margin: 250px 0;
      }
      .contentTitle{
            display:flex;
            justify-content:center;
      }
      .titleMore{
          font-size:70px;
          width:10ch;
          font-weight:bold;
          font-family:"Libre Baskerville", serif;
          text-align:center;
      }
      .card{
            background:var(--bg--color);
            padding:34px 50px;
            display:flex;
      }
      .contentCard{
          display:flex;
          flex-direction:column;
          gap:120px;
            
      }
      .headerCardMore{
          display: flex;
            justify-content: space-between;
      }
      .spans{
          display:flex;
          gap:40px;
      }
      .spans > span {
          display: inline-block;
          background: var(--color--secondary);
          width:21px;
          height:21px;
          border-radius:50%;
      }
      .renderCardTeams{
          margin: 0 120px;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          align-items:center;
          gap:70px;
      }
      .footerCardMore{
          background: var(--bg--color--secondary);
          width:80px;
          padding:5px;
          border-radius:30px;
      }
      @media (min-width:320px) and (max-width:768px){
          .container{
              margin:30px 0;
          }
          .titleMore{
              font-size:40px;
          }
          .card{
              padding:1rem;
              margin:1rem;
              border-radius:1rem;
          }
          .renderCardTeams{
              margin:1rem;
              gap:20px;
              flex-direction:column;
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
        <style>${more.styles}</style>
     <div class='container'>
        <div class="contentTitle">
            <h2 class="titleMore">
                Add members assing managers, and supervise your team.
            </h2>
        </div>
        <div class="card">
            <div class="contentCard">
                <header class="headerCardMore">
                    <div class="spans">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="add"> + </span>
                </header>
                <div class="renderCardTeams">
                    <card-team rol="Admin" name="Wilson Diaz" team="wilson"></card-team>
                    <card-team rol="Member" name="Alfredo Culhane" team="alfredo"></card-team>
                    <card-team rol="Member" name="Cheyenne Ekstrom Bothman" team="cheyenne"></card-team>
                    <card-team rol="Member" name="Makenna Mango" team="makenna"  ></card-team>
                </div>
                <footer class="footerCardMore">
                    <img src="${tasksImg}" alt="tasks"/>
                    <span> tasks</span>
                </footer>
            </div>
        </div>
     </div>
    `;
    }
}
customElements.define('more-tasks', more);
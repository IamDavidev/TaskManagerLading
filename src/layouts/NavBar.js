import Logo from '../assets/images/Logo.png';
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/`
        :host{}
        .container{
          
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items:center;
          width:100%;
          box-sizing:border-box;
        }
          .LogoImg{
            width: 160px;
            height: 52px;
            object-fit:contain;
        }
          .list{
          list-style:none;
          display:flex;
          gap:0;
          margin:0;
          padding:0;
        }
          .btnNav{
          background-color:transparent;
          color:var(--text--color);
          width:158px;
          height:59px;
          border-radius:10px;
          box-sizing:border-box;
          font-size:20px;
        }
          .btnBlog{
            border:none;
          }
          .btnLogin{
              border:2px solid var(--color--primary);
          }
          @media (min-width:320px)and (max-width:480px){
            .container{
                justify-content:center;
                flex-direction:column;
            }
          }
          
          }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =/*html*/`
        <style>${NavBar.styles}</style>
     <nav class='container'>
        <img  src="${Logo}" alt="Brutask" class="LogoImg"  />
        <ul class="list">
            <li class="listItem"><button class=" btnNav btnBlog">Blog</button></li>
            <li class="listItem"><button class=" btnNav btnLogin">Login</button></li> 
        </ul>
     </nav>
    `;
  }
}
customElements.define('nav-bar', NavBar);
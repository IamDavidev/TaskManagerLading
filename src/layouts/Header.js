import arrowStarted from '../assets/icons/arrowRight.svg';
import taskManager from '../assets/images/Illustrations.svg';
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{
      }
      .container{
          margin-top:80px;
          display:flex;
          flex-direction:row;
          align-items:center;
            justify-content:space-between;
      }
      .titleHeader{
          font-size:80px;
          font-weight:bold;
          font-family:"Libre Baskerville", serif;
          margin-bottom:40px;
      }
      .textHeader{
            font-size:24px;
      }
      .btnHeader{
            background-color:var(--color--text);
            color:var(--bg--color);
            font-weight:bold;
            font-size:20px;
            display:flex;
            align-items:center;
            padding:23px 40px;
            border:none;
            border-radius:10px;
      }
      .btnHeader > img {
            width:20px;
            color:var(--bg--color);
      }
      .illustrationHeader{
            width:100%;
            height:auto;
        }
        @media (min-width:320px) and (max-width:768px){
            .container{
                margin-top:20px;
                flex-wrap:wrap;
            }
            .titleHeader{
                font-size:40px;
            }
            .textHeader{
                font-size:16px;
            }
            .btnHeader{
                font-size:14px;
                padding:10px 20px;
            }

        }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${Header.styles}</style>
     <header class='container'>
        <section class="headerContain">
            <h1 class="titleHeader"> Task - Manager for small teams.</h1>
            <p class="textHeader"> brustaks is a simple to-do list for small companies or teams</p>
            <button class="btnHeader"> Get Started for free <img src="${arrowStarted}" alt="" /></button>
        </section>
        <figure>
            <img src="${taskManager}" alt="Task Managaer" class="illustrationHeader"/> 
        </figure>
     </header>
    `;
  }
}
customElements.define('header-task', Header);

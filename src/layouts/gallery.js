import arrow from '../assets/icons/arrowRight.svg'
import avatar from '../assets/images/Avatar.png'

class gallery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
      .container{
          background: var(--bg--color);
          padding: 57px;
          box-sizing:border-box;
          font-size:22px;
          border-radius:30px;
      }
      .cardGallery{
          display:flex;
          flex-direction:row;
          alignItems: center;
          
      }
      .headerGallery{
          display:flex;
          flex-direction:row;
          gap:55px;
          align-items:center;
      }
      
      .titleGallery{
          position:relative;
          font-size:36px;
          font-weight:bold;
          font-family:"libre baskerville", sans serif;
          width:9ch;
      }
      
      .titleGallery::after{
            width:2px;
            height:50%;
            background: var(--color--text);
            content:'';
            position:absolute;
            right:15%;
            top:25%;
      }
      
      .itemGallery{
            display:flex;
            flex-direction:row;
            align-items:center;
            gap:53px;
      }
     
      .listGallery{
          padding:0;
          margin:0;
            list-style:none;
            width:100%;
      }
     
      .imgHeader{
          width:215px;
      }
     
      .activity{
          display:flex;
          width:100%;
          align-items:center;
          justify-content:space-between;
      }
      .percentageActivity{
          opacity: 0.5;
          font-size:22px;
          font-weight:bold;
      }
      .listImg{
            width:20px;
      }
    
      `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${gallery.styles}</style>
     <div class='container'>
        <article class="cardGallery">
            <header class="headerGallery">
                <img  src="${avatar}" alt="Rica" class="imgHeader"/>
                <h3 class="titleGallery"> Good Morning Rica</h3>
            </header>
            <ul class="listGallery">
                <li class="itemGallery">
                    <img    src="${arrow}" alt="Tasks" class="listImg"  />
                    <div class="activity">
                        <p>All Tasks</p> <span class="percentageActivity">70%</span>
                    </div>
                </li>
                <li class="itemGallery">
                    <img    src="${arrow}" alt="mettings"  class="listImg" /> 
                    <div class="activity">
                        <p>Meetings</p> <span class="percentageActivity">92%</span>
                    </div>
                </li>
                <li class="itemGallery">
                    <img    src="${arrow}" alt="trips" class="listImg" />
                    <div class="activity">
                        <p>Trips</p> <span class="percentageActivity">30%</span>
                    </div>
                </li>
            </ul>
        </div>
     </div>
    `;
    }
}
customElements.define('gallery-task', gallery);
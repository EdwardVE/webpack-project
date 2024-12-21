import './nav-bar.js';
import './login-button.js';

class AppPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          text-align: center;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo {
          
          width: 781px;
          height: 246px;
        }
      </style>
      <nav-bar></nav-bar>
      <div class="container">
        <img src="../utils/Group 1.png" alt="logo"  class="logo" />
        <login-button style="margin-top: 287px;" ></login-button>
      </div>
    `;
  }
}

customElements.define('app-page', AppPage);
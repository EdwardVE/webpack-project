class NavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .navbar {
            background-color: #333;
            padding: 1rem;
            color: white;
            display: flex;
            justify-content: space-between;
          }
          .navbar a {
            color: white;
            text-decoration: none;
            margin: 0 1rem;
          }
        </style>
        <div class="navbar">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
      `;
    }
  }
  
  customElements.define('nav-bar', NavBar);
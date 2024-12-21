// import { PeraWalletConnect } from '@perawallet/connect';
// import { PeraWalletConnect } from 'https://esm.sh/@perawallet/connect@latest';
// import { PeraWalletConnect } from 'https://cdn.skypack.dev/@perawallet/connect';
class LoginButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      // this.walletConnect = new PeraWalletConnect();
      // this.connected = false;
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .login-button {
            width: 809px;
            height: 98px;
            background-color: #D98FFF;
            color: white;
            border-radius: 60px;
            border: none;
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;


          }
        </style>
        <button class="login-button">
        INGRESAR CON PERA 
          <img src="../utils/icon-pera.png" alt="logopera" width="50" />
        </button>
      `;
      this.shadowRoot.querySelector('.login-button').addEventListener('click', () => this.connectWallet());
    }
    async connectWallet() {
      try {
        // const accounts = await this.peraWallet.connect();
        // console.log('Cuentas conectadas:', accounts);
        // this.connectedAccounts = accounts;
        // this.peraWallet.connector?.on('disconnect', () => {
        //   console.log('Billetera desconectada');
        //   this.connectedAccounts = null;
        // });
        alert('Connected to Pera Wallet');
      } catch (error) {
        console.error('Error al conectar con Pera Wallet:', error);
      }
    }
  }

  
  
  customElements.define('login-button', LoginButton);
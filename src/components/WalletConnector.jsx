import React, { useState } from 'react';
import { PeraWalletConnect } from '@perawallet/connect';

const peraWallet = new PeraWalletConnect();

const WalletConnector = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  // Manejar la conexión con la billetera
  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setWalletAddress(accounts[0]); // Guarda la dirección de la cuenta conectada

      // Maneja la desconexión de la billetera
      peraWallet.connector?.on('disconnect', () => {
        setWalletAddress(null);
      });
    } catch (error) {
      console.error('Error al conectar con Pera Wallet:', error);
    }
  };

  // Renderiza el botón y la información de la cuenta conectada
  return (
    <div>
      {walletAddress ? (
        <div>
          <p><strong>Conectado con:</strong> {walletAddress}</p>
          <button onClick={() => peraWallet.disconnect()}>Desconectar</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Conectar Pera Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;

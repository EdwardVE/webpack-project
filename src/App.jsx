import React, { useEffect } from 'react';
import WalletConnector from './components/WalletConnector.jsx';

const App = () => {
    useEffect(() => {
        // Cargar el Web Component (si no lo has hecho ya)
        import('./components/app-page.js');
      }, []);
  return (
    <div>
        <app-page></app-page>
        <WalletConnector/>
    </div>
  );
};

export default App;

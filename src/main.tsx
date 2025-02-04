import App from "./App";
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ReactDOM from "react-dom/client";

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://alverelt.github.io/first_contract_front_end/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
)
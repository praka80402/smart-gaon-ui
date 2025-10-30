import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = "625741941685-dssc4uvqglesfphghcfj6murku3bttgb.apps.googleusercontent.com";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
       </GoogleOAuthProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();

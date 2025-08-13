import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
AOS.init();


AOS.init({ duration: 800, once: true });

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

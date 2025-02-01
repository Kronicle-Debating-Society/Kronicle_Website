import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App.jsx';
import './index.css';

// Rendering the App inside Router
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router> {/* Wrap App in Router */}
      <App />
    </Router>
  </StrictMode>
);

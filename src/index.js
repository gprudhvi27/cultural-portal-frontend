import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global styles (if applicable)
import App from './App';  // Import the main App component
// import reportWebVitals from './reportWebVitals';  // Optional for performance monitoring

// Render the app into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Report web vitals (if desired)
// reportWebVitals();

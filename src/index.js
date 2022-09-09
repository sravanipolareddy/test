import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "./components/navbar";
import App from "./components/app";
import './index.css'

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
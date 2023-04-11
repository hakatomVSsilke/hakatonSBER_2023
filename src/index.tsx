import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import authStore from "./stores/auth.store";
import App from './App';

import './index.css';

const container: HTMLElement = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={authStore}>
      <App />
    </Provider>
);


import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { AppContextProvider } from 'contexts/AppContext';

it(`App renders without crashing`, () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  );
});

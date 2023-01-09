import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import { AppContextProvider } from 'contexts/AppContext';

it(`Main renders without crashing`, () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  )
})

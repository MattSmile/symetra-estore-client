import React from 'react';
import { createRoot } from 'react-dom/client';
import CurrentUserDisplay from './CurrentUserDisplay';
import { AppContextProvider } from 'contexts/AppContext';

it(`ProductListing renders without crashing`, () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <AppContextProvider>
      <CurrentUserDisplay />
    </AppContextProvider>
  )
});

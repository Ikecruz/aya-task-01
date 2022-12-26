import { MantineProvider } from '@mantine/core';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MantineProvider theme={{ fontFamily: 'Pally' }}>
      <App />
    </MantineProvider>
  </StrictMode>
);

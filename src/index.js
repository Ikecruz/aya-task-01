import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import AppRoot from './Root';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RecoilRoot>
            <AppRoot />
        </RecoilRoot>
    </StrictMode>
);

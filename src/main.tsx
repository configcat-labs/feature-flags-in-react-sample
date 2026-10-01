import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigCatProvider, PollingMode } from 'configcat-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigCatProvider
      sdkKey='YOUR-CONFIGCAT-SDK-KEY'
      pollingMode={PollingMode.AutoPoll}
      options={{
        pollIntervalSeconds: 5,
      }}
    >
      <App />
    </ConfigCatProvider>
  </StrictMode>,
)

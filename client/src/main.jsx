import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import {BrowserRouter} from "react-router-dom"
import {Provider } from "react-redux"
import { store } from './store/store.jsx'
import { persistStore } from 'redux-persist'

import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </StrictMode>,
)

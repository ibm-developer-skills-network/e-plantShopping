import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* pass the Redux store as a prop, allows every component access to the details of store.js */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

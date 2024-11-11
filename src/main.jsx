import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)

const router = createBrowserRouter([
    {
        path: '/vehicle-app', // Append the app name from GitHub page to root location (/)
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '/vehicle-app/', // Append the app name from GitHub page
                        element: <MakeListPage />,
                    },
                    // ... other routes
                ],
            },
        ],
    },
]);

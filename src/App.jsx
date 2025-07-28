import { Provider } from 'react-redux'
import './App.css'
import ClientLayout from './layouts/ClientLayout'
import AppRouter from './routers/AppRouter'
import React from 'react'
import { store } from './app/store'
import ThemeProvider from './theme/ThemeProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider>
          <Router>
            <ClientLayout>
              <AppRouter />
            </ClientLayout>
          </Router>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

export default App

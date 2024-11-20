import React from 'react'
import './App.css'
import { DataProvider } from './context/DataContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Footer />
    </DataProvider>
  )
}

export default App
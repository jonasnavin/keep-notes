import React from 'react'
import './App.css'
import { DataProvider } from './context/DataContext'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Main />
    </DataProvider>
  )
}

export default App
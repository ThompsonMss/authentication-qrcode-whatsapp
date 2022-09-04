import { useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routers } from './routers'
import { GlobalStyle } from './styles'

function App () {

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routers />
    </>
  )
}

export default App

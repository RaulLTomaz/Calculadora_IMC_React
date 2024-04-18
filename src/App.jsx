import { useState } from 'react'

import Formulario from "./components/Formulario"

function App() {
  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <Formulario/>
      <img src="https://www.drrogermoura.com.br/images/artigos/tabela-imc.png" />
    </div>
  )
}

export default App

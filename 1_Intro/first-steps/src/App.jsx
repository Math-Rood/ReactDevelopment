import { useState } from 'react'
import './App.css'
//importando imagem de assets após os imports importantes
import Universe from './assets/universe.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          {/* Imagem em public pode ser acessada diretamente pelo src */}
          <h1>Adicionando imagem de public</h1>
          <img src="/monkey1.jpg" alt="Macaco Computando? ( O.o)" />
        </div>
        <div>
          {/* Imagem de assets devem ser importadas */}
          <h1>Importando imagem de assets</h1>
          <img src={Universe} alt="Universo feito pelo macaco computando? ( X.x)" />
        </div>
      </div>
    </>
  )
}

export default App

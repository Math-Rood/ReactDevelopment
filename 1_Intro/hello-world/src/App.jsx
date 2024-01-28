//Local de importação de components
import FirstComponent from './components/firstComponent'
import TemplateExpressions from './components/templateExpressions'
import HierarComponent from './components/hierarComponents'
import Events from './components/Events'
import StructApp from './components/StructApp'

//Logo a baixo fica a importação de styles/CSS e imagens
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //tudo dentro do return e como se fosse um html
    <>
      <div>
        {/*Comentarios dentro do corpo do return deve ser feito com esse comando, que executa uma funçao JS*/}
        {/*Não esquecer sobre converter class para className e que tudo deve estar dentro de uma div*/}
        <h1>Hello World</h1>
        <p>Change string colors!</p>
        <HierarComponent/>
        <Events/>
        <StructApp/>
      </div>
    </>
  )
}

export default App

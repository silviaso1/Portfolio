import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Inicio} from './components/Inicio/Inicio'
import { Sobre} from './components/Sobre/Sobre'
import { Skills} from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Skills />
    </>
  )
}

export default App

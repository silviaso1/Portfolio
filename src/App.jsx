import { useState } from 'react'
import './App.css'
import { Header } from './components/Nav/Nav'
import { Inicio} from './components/Inicio/Inicio'
import { Sobre} from './components/Sobre/Sobre'
import { Skills} from './components/Skills/Skills'
import { Formacao } from './components/Formação/Formacao'
import{Projetos} from './components/Projetos/Projetos'
import { ContactMe } from './components/Contact/ContactMe'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Formacao />
      <Skills />
      <Projetos />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App

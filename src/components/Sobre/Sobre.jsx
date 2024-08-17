import './sobre.css'
import Foto from '../imgs/foto5.jpeg';

export function Sobre(){
    return (
        <>
        <h3 id='sobre-mim'><span>#</span>Sobre mim</h3>
        <div className='Sobre' id='sobre'>
        
        <section id='exibindo'>
        <div class="title">
            <h1>Hello,</h1>
            <h1>Eu sou a Silvia!</h1>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit</p>
        <button>Baixe meu Currículo!</button>
        </section>
        <img src={Foto} alt="" id='eu'/>



        <section id='hide'>
        <h1>Hello,</h1>
        <h1>Eu sou a Silvia</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        
     </div>
        </>
    )
}
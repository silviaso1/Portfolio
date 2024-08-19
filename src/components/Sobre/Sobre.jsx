import './sobre.css'
import curriculo from '../imgs/Curriculo.pdf'
import Eu from '../imgs/foto5.jpeg';

export function Sobre(){
    return (
        <>
        <h3 id='sobre-mim'><span>#</span>Sobre mim</h3>
        <div className='Sobre' id='sobre'>
        <section id='exibindo'>
        <div class="title">
            <h1>Hello,</h1>
            <h1>Eu sou a <span>Silvia! :)</span></h1>
        </div>
        <div id='quem-sou'>
        <p>Estudante de Análise e desenvolvimento de sistemas na FAETERJ-RIO, atualmente no 4° semestre, com um forte interesse na área de Desenvolvimento Web. Estou em busca de uma oportunidade de estágio onde eu possa aplicar meus conhecimentos teóricos em um ambiente prático, colaborar com profissionais experientes e continuar meu desenvolvimento</p>
        <a href={curriculo} download="curriculo-silvia-soares"><button>Baixe meu Currículo!</button></a>
        </div>
        </section>

        <section>
    <div className="foto-container">
        <div className="circulo"></div>
        <img src={Eu} alt="" id='eu' />
    </div>
</section>

     </div>
        </>
    )
}
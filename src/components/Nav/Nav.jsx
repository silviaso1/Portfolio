import './nav.css'

export function Header(){
    return(
        <div className="Nav">
            <ul>
                <a href="#sobre"><li id='home'>Sobre</li></a>
                <a href=""><li>Formação</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href=""><li>Projetos</li></a>
                <a href=""><li>Contato</li></a>
            </ul>
        </div>
    )
}
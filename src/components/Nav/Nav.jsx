import './nav.css'

export function Header(){
    return(
        <div className="Nav" id='nav'>
            <ul>
                <a href="#nav"><li id='home'>Home</li></a>
                <a href="#formacao"><li>Formação</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#projetos"><li>Projetos</li></a>
                <a href="#contato"><li>Contato</li></a>
            </ul>
        </div>
    )
}
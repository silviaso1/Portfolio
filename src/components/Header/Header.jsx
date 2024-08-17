import './header.css'

export function Header(){
    return(
        <div className="Header" id='header'>
            <ul>
                <a href="#header"><li id='home'>Home</li></a>
                <a href="#sobre"><li>Sobre</li></a>
                <a href="#skills"><li>Skills</li></a>
                <li>Projetos</li>
            </ul>
        </div>
    )
}
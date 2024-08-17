import './skills.css'
import { Tecnologias } from '../Tecnologias/Tecnologias'

export function Skills(){
    return (
        <div className='Skills' id='skills'>
            <h1 id='destaque'>Técnologias</h1>
            <Tecnologias />
        </div>
    )
}
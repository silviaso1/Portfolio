import './skills.css'
import { Tecnologias } from '../Tecnologias/Tecnologias'
import { RiCodeView } from "react-icons/ri";

export function Skills(){
    return (
        <div className='Skills' id='skills'>
            <RiCodeView size={40} color='rgb(200, 19, 255)'/>
            <h1 id='destaque'>TÉCNOLOGIAS</h1>
            <Tecnologias />
        </div>
    )
}
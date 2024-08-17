import './inicio.css';
import Foto from '../imgs/background6.png';

export function Inicio() {
    return (
        <>
            <div className='Inicio'>
                <img src={Foto} alt="" id='fotoTop'/>
                <h1 className="move" id='white'>PORTFÓLIO</h1>
                <h1 className="move">PORTFÓLIO</h1>
                <h1 className="move">PORTFÓLIO</h1>
                <h1 className="move">PORTFÓLIO</h1>
            </div>
            <div id="barra-container">
                <h2>.</h2>
            </div>
        </>
    );
}

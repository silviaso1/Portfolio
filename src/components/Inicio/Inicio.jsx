import './inicio.css';
import Foto from '../imgs/foto5.jpeg';

export function Inicio() {
    return (
        <>
            <div className='Inicio'>
                <h1 className="move" id='white'>DESENVOLVEDORA</h1>
            </div>
            <div id="barra-container">
                <div id='text'>
                    <img src={Foto} alt="eu"  id='me'/>
                    <h4>FRONT END</h4>
                    <h4>UI/UX DESIGNER</h4>
                </div>
            </div>
        </>
    );
}
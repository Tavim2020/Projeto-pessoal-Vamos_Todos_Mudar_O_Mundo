import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styleHeader';

const Header = () => {
    return (
        <HeaderContainer>

            <div className='containerInterno'>

                <div className='left'>
                    <Link className='Home-Link' to='/'>Vamos Todos Mudar O Mundo?</Link>
                </div>

                <div className='right'>

                    <nav>

                        <Link className='Sobre-Link' to='/sobre'>Sobre/Quem Sou</Link>

                        <Link className='Contribuir-Link' to='/contribuir'>Contribuir</Link>

                        <Link className='Contato-Link' to='/contato'>Contato</Link>

                        <Link className='Galeria-Link' to='/galeria'>Galeria</Link>
                    </nav>

                </div>

            </div>
            
        </HeaderContainer>
    )
}

export default Header

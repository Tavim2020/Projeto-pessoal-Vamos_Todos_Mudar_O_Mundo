import React from 'react';
import { FooterContainer } from './styleFooter';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>

            <div className='footerContainer'>

                <h3>
                    Para entrar em contato conosco basta simplesmente clicar em algum dos 
                    icones abaixo, ou.. simplesmente preencher o 
                    formulário na página de <Link className='color-yellow' to='/contato'>Contato.</Link>
                </h3>

                <div className='iconsFooter'>

                    <img src='imagens/facebook.png' alt='Facebook' />

                    <img src='imagens/whatsapp.png' alt='WhatsApp' />

                </div>

                <h4>Muito Obrigado A Todos Os Contribuintes.</h4>

            </div>
            
            
        </FooterContainer>
    )
}

export default Footer

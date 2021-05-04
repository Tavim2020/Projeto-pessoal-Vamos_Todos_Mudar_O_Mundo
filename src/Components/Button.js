import React from 'react';
import styled from 'styled-components';

const ButtonForm = styled.button`
    margin: 0 auto; 
    width: 11vw; 
    height: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.55vw;
    transition: 0.5s;
    background-color: var(--azul-carinho);

    img{
        width: 2vw;
        margin-right: 1vw;
    }
    
    &:hover{
        background-color: var(--green);
        color: var(--white);
    }
`;

const Button = () => {
    return (
        <ButtonForm type='submit'>
            <img src='imagens/enviar.svg' alt='Enviar' />
            Enviar
        </ButtonForm>
    )
}

export default Button

import React from 'react';
import Button from '../Components/Button';
import { ContatoContainer } from './Styles/styleContato';
import { Link } from 'react-router-dom';


const Contato = () => {

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [city, setCity] = React.useState('');
    const [uf, setUf] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [toDo, setToDo] = React.useState('');
    const [description, setDescription] = React.useState('');

    function submitForm(){
        console.log('ok');
    }

    return (
        <ContatoContainer>

            <div className='container-wrapper'>

                <div className='titleContato'>

                    <h2>Preencha o formulário abaixo para entrar em contato conosco.</h2>

                    <h4>
                        Toda forma de contribuição é bem vinda, seja com ajuda de custos,
                        levando conhecimento presencialmente ou virtualmente também, o que no final
                        importa é transformar vidas e mudar pessoas com o conhecimento ou... algo de bom.
                        Nosso projeto desde já agradece o seu tempo para nos visitar e desejamos a você
                        tudo de bom e do melhor em sua vida. 

                        <img src='imagens/sorriso.png' alt='Emoji Feliz' />
                    </h4>

                    <h4>
                        Pode ter certeza que o mundo agradece iniciativas boas e elas movimentam o mundo
                        para frente com amor e carinho.
                    </h4>

                </div>


                <div className='formAndCosts'>

                    <form action='#' method='#' onSubmit={submitForm}>

                        <label htmlFor='name'>Nome*</label>
                        
                        <input 
                        type='text' 
                        id='name' 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Nome...'/>



                        <label htmlFor='surname'>Sobrenome*</label>
                        
                        <input 
                        type='text' 
                        id='surname' 
                        value={surname} 
                        onChange={(event) => setSurname(event.target.value)}
                        placeholder='Sobrenome...'/>



                        <label htmlFor='city'>Cidade*</label>
                        
                        <input 
                        type='text' 
                        id='city' 
                        value={city} 
                        onChange={(event) => setCity(event.target.value)}
                        placeholder='Cidade...'/>



                        <label htmlFor='uf'>Estado*</label>
                        
                        <input 
                        type='text' 
                        id='uf' 
                        value={uf} 
                        onChange={(event) => setUf(event.target.value)}
                        placeholder='Estado...'/>



                        <label htmlFor='country'>País*</label>
                        
                        <input 
                        type='text' 
                        id='country' 
                        value={country} 
                        onChange={(event) => setCountry(event.target.value)}
                        placeholder='País...'/>


                        <label htmlFor='to-do'>O que Você Gostaria?*</label>
                        
                        <select id='to-do' value={toDo} onChange={(event) => setToDo(event.target.value)}>

                            <option value=''>Selecione Aqui</option>

                            <option value='1' >Levar Conhecimento Através de Redes Sociais</option>

                            <option value='2'>Levar Conhecimento Pessoalmente</option>

                            <option value='3'>Ajudar com os Custos do Projeto</option>

                        </select>



                        <label htmlFor='description'>Digite Aqui o que Você Gostaria de Dizer
                        (<strong>campo não obrigatório</strong>)</label>
                        
                        <textarea 
                        type='text' 
                        id='description' 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder='Digite Algo Aqui Para que Possamos Ficar Sabendo...'/>


                        <Button />
       
                    </form>

                    <span className='division'></span>


                    <div className='anonymous-payment'>

                        <p>
                            Para você que não gostaria de se indentificar e queira contribuir
                            com os custos do projeto, <Link to='/contato/payment' 
                            className='payment'> Clique Aqui!</Link>
                        </p>

                    </div>

                </div>

            </div>
            
        </ContatoContainer>
    )
}

export default Contato

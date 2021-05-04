import React from 'react';
import Button from '../Components/Button';
import { ContatoContainer } from './Styles/styleContato';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';


const Contato = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);


    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [city, setCity] = React.useState('');
    const [uf, setUf] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [toDo, setToDo] = React.useState('');
    const [description, setDescription] = React.useState('');

    
    React.useEffect(()=>{
        setStatePageNotFound(false);
        setFooterGlobal(true);
    })

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

                    <form action='#' method='POST'>

                        <label htmlFor='name'>Nome*</label>
                        
                        <input 
                        type='text' 
                        id='name' 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Nome...'
                        maxLength='20'
                        minLength='3' 
                        required />
                        <p>Caracteres Restantes: {20 - name.length}</p>



                        <label htmlFor='surname'>Sobrenome*</label>
                        
                        <input 
                        type='text' 
                        id='surname' 
                        value={surname} 
                        onChange={(event) => setSurname(event.target.value)}
                        placeholder='Sobrenome...'
                        maxLength='55'
                        minLength='4' 
                        required/>
                        <p>Caracteres Restantes: {35 - surname.length}</p>



                        <label htmlFor='uf'>Estado*</label>
                        
                        <input 
                        type='text' 
                        id='city' 
                        value={uf} 
                        onChange={(event) => setUf(event.target.value)}
                        placeholder='Estado...'
                        maxLength='45'
                        minLength='3' 
                        required />
                        <p>Caracteres Restantes: {45 - uf.length}</p>




                        <label htmlFor='city'>Cidade*</label>
                        
                        <input 
                        type='text' 
                        id='city' 
                        value={city} 
                        onChange={(event) => setCity(event.target.value)}
                        placeholder='Cidade...'
                        maxLength='45'
                        minLength='3' 
                        required />
                        <p>Caracteres Restantes: {45 - city.length}</p>




                        <label htmlFor='country'>País*</label>
                        
                        <input 
                        type='text' 
                        id='country' 
                        value={country} 
                        onChange={(event) => setCountry(event.target.value)}
                        placeholder='País...'
                        maxLength='35'
                        minLength='3' 
                        required />
                        <p>Caracteres Restantes: {35 - country.length}</p>


                        <label htmlFor='email'>Email*</label>
                        
                        <input 
                        type='email' 
                        id='email' 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Email...'
                        maxLength='75'
                        minLength='6' 
                        required/>
                        <p>Caracteres Restantes: {75 - email.length}</p>


                        <label htmlFor='to-do'>O que Você Gostaria?*</label>
                        
                        <select 
                        id='to-do' 
                        value={toDo}
                        onChange={(event) => setToDo(event.target.value)} 
                        required>

                            <option value=''>Selecione Aqui</option>

                            <option value='Levar Conhecimento Através de Redes Sociais' >
                                Levar Conhecimento Através de Redes Sociais
                            </option>

                            <option value='Levar Conhecimento Pessoalmente'>
                                Levar Conhecimento Pessoalmente
                            </option>

                            <option value='Ajudar com os Custos do Projeto'>
                                Ajudar com os Custos do Projeto
                            </option>

                        </select>



                        <label htmlFor='description'>Digite Aqui o que Você Gostaria de Dizer
                        (<strong>campo não obrigatório</strong>)</label>
                        
                        <textarea 
                        type='text' 
                        id='description' 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder='Digite Algo Aqui Para que Possamos Ficar Sabendo...'
                        maxLength='300' />

                        <p className='textarea-length'>
                            Caracteres Restantes: {300 - description.length}
                        </p>


                        <Button />
       
                    </form>

                    <span className='division'></span>


                    <div className='anonymous-payment'>

                        <p>
                            Para você que não gostaria de se indentificar e queira contribuir
                            com os custos do projeto, <Link to='/pagamento' 
                            className='payment'> Clique Aqui!</Link>
                        </p>

                    </div>

                </div>

            </div>

            <footer>
                <div className='containerInternoFooter'>
                      
                      <h3>Projeto - Vamos Todos Mudar O Mundo</h3>

                      <h4>
                          Iniciativa de responsabilidade privada, sem fins lucrativos e com
                          o objetivo de mudar o mundo com conhecimento.
                      </h4>

                      <h4>Endereço raiz: Rua 16</h4>

                      <h4>Número: 740A</h4>

                      <h4>Bairro: Jardim Benini</h4>

                      <h4>Cidade: Orlândia</h4>

                      <h4>Estado: São Paulo</h4>
     

                </div>
            </footer>
            
        </ContatoContainer>
    )
}

export default Contato

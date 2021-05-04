import React from 'react'
import { CotainerContato, GlobeContainer, SectionObjetivo } from './Styles/styleHome';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Home = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setStatePageNotFound(false);
        setFooterGlobal(false);
    })

    function facebook(){
        window.open('https://www.facebook.com/otavio.doasantoslopea', '_blank');
    }

    function whatsapp(){
        window.location.href = 'tel:+5516993936784';
    }
    return (
        <>
            <GlobeContainer>

                <div className='ContainerInternoGlobo'>

                    <img className='background' src='/imagens/gestao.jpeg' alt='Background-Todos-Juntos' />

                    <div className='leftContainer'>

                        <div className='title'>

                            <h1>Projeto de Origem Privada <strong>Sem Fins Lucrativos!</strong></h1>

                        </div>

                        <div className='icons'>

                            <img src="imagens/juntos.png" alt="Juntos Somos Mais Fortes" />

                            <img src="imagens/ame.png" alt="Atitude Solidária" />

                            <img src="imagens/mundo-ame.png" alt="Mundo Se Ame" />

                            <img className="facebook" onClick={facebook} src="imagens/facebook.png" alt="Facebook" />

                            <img className="whatsapp" onClick={whatsapp}src="imagens/whatsapp.png" alt="Whatsapp" />

                        </div>

                    </div>

                    

                    <div className='globo-terrestre'>

                        <div className="globo">


                        </div>

                    </div>

                </div>
                
            </GlobeContainer>


            <SectionObjetivo>

                <div className='divInterna'>

                    <div className='titleObjetivo'>

                        <h3>Objetivo</h3>

                    </div>

                    <div className='containerTextAndImage'>

                        <div className='textAndButton'>

                            <p>
                                Com intuito de mudar o mundo através de gestos solidários em uma 
                                faze tão complicada como essa, eu(Otávio dos Santos Lopes) particularmente 
                                tive a iniciativa de poder estar ajudando pessoas através de atitudes 
                                simples, mais com um peso muito grande para a sociedade a qual vivemos, 
                                aonde o ser humano só é capaz de olhar para si próprio, sem se quer ter
                                 a iniciativa de poder ajudar pessoas de maneira diferente e 
                                 maravilhosa. Sendo assim eu particularmente estou me propondo a 
                                 poder ajudar pessoas a aprender coisas nas quais eu mesmo me vejo 
                                 na capacidade de ensinar exatamente por ter conhecimento um específico.
                            </p>


                            <Link  to='/sobre'>
                                <button className='buttonSaibaMais'>
                                    Saiba Mais...
                                </button>
                            </Link>

                        </div>


                        <div className='imageContainer'>

                            <img src='/imagens/objetivo.png' alt='Publico-Alvo' />

                        </div>



                    </div>

                </div>

            </SectionObjetivo>


            <CotainerContato>

                    <div className='contato'>

                        <h3>Contato</h3>

                        <p className='first-P'>
                            Para Entrar em contato e poder saber mais sobre esse tipo de iniciativa, 
                            basta entrar na página de <Link className='color-blue' to='/contato'>e-mail</Link>, preencher o formulário e nos enviar ou... 
                            simplesmente me chamar via whatsapp para que possamos dialogar, e eu 
                            transparentemente irei te explicar como funciona o procedimento todo 
                            e a quem já foi feito uma iniciativa maravilhosa como essa.
                        </p>


                        <p className='secondy-P'>
                            Vamos Todos Juntos Em Busca De Um Mundo Feliz Com Mais Igualdade A Todos.
                        </p>

                    </div>

            </CotainerContato>

        </>
    )
}

export default Home

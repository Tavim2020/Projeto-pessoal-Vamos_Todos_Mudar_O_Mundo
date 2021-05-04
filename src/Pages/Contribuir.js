import React from 'react';
import { ContribuirContainer } from './Styles/styleContribuir';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Contribuir = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setStatePageNotFound(false);
        setFooterGlobal(false);
    })


    return (
        <ContribuirContainer>

            <div className='wrapper'>

                <h3>Sobre Contribuições</h3>

                <p>
                    Esse projeto é de origem sem fins lucrativos, ou seja... todo o projeto, tudo adquirido
                    aqui será de alguma forma repassado para as pessoas que abrangem o projeto todo em si,
                    no caso... como terá conhecimentos repassados pessoalmente a crianças e terá gastos 
                    com produtos em geral, todo esses gastos serão custiados pelo projeto de forma 
                    totalmente transparente. Porém, não à apenas esse método de contribuição. Como foi 
                    comentado na página <Link to='/sobre' className='sobre'>sobre a empresa</Link>, a outros modelos de 
                    contribuir com o projeto em si.
                </p>

                <h3>Maneiras de si Contribuir com o Projeto</h3>

                <h3>- Através de Redes Sociais</h3>
                <h3>- Levando Conhecimento Pessoalmente</h3>
                <h3>- Com Ajuda Financeira de Custos</h3>

                <li>Através de Redes Sociais</li>

                <p>
                    Desta forma se você gostaria de contribuir, é um processo tranquilo, porém, o que
                    lhe acontecerá será um tempo apenas destinado a isso. Porém se você for pensar de
                    maneira mundial ou nacional, olhe pelo lado bom das coisas, você será capaz de 
                    transformar vidas e gerar conhecimento, algo valiozíssimo nos dias atuais. E a forma de
                    você fazer isso é apenas gerando vídeos com a HasTag(<strong>#Vamos Todos Mudar
                    O Mundo</strong>) mostrando aquilo que você sabe fazer de maneira
                    bem detalhada, com clareza para que pessoas que nunca tiveram contato com aquilo ou 
                    já tiveram possam ter contato com o mesmo, e através do seu aprendizado subir um degrau na
                    vida, pois o mundo não é apenas uma competição aonde quem ganha é quem esta apenas na frente,
                    mas, também é levar isso, mostrar para pessoas como funciona, o que você sabe fazer e 
                    somar conhecimentos na vida de outros. Uma breve reflexão.... se você tem um problema, 
                    ou esta com dificuldades de executar um projeto que você hoje tem em mente, quando a 
                    gente gera conhecimento, fará com que a outra pessoa adquira com o tempo tudo aquilo 
                    herdado de você, sendo assim... tornará um pensamento pavilhado com o seu sobre algo do seu 
                    dia a dia. E somente assim dois, três, quatro, cinco crâneos pensando em maneiras diferentes
                    de lidar com o mesmo problema, achar aquela solução, pensar em algo sobre aquilo que
                    você nunca tinha pensado antes e o seu eu de ontem aprende com a pessoa que você ensinou,
                    se tornando um ciclo benigno que alimenta nossos cerebros e nos faz ir ainda mais além, 
                    tirando pessoas da zona da ignorância, gerando pessoas recebendo rendas melhores, 
                    conseguindo mover o mundo, mantendo nosso país de maneira melhor. Pense bem... pense no
                    próximo.
                </p>

                <li>Levando Conhecimento Pessoalmente</li>

                <p >
                    Essa iniciativa transformara diretamente pessoas ao seu redor, pessoas de sua cidade,
                    comunidade, bairro, região. Esse tipo de ação lhe tomará por um lado mais tempo,
                    duas, três, cinco, dez horas toda a semana se dedicando, empenhado. Porém o resultado
                    ali naquele lugar praticado o mesmo seja maravilhoso, o resultado o tempo, a dedicação 
                    em si tem resultado. Pois será pessoas que você conhece, tem contato, pessoas da sua
                    família mesmo ali querendo, demonstrando, e desenvolvendo com seus ensinamentos e veja,
                    isso não é algo fantástico? Com toda certeza é sim.
                    <br></br>
                    <br></br>
                    Então pegue aquilo que você sabe fazer pessoalmente, e
                    entre em <Link className='contato' to='/contato'>contato conosco.</Link> E entraremos em contato com você
                    para poder estar conversando sobre como poderá ser feito esse tipo de procedimento.
                    Se o projeto estiver condições financeiras de ajudar você presencialmente 
                    estar levando aquilo, será um prazer para nós, so iremos pedir total transparência, nos 
                    enviando fotos, documentos, tudo que comprove que aquele X($$), foi gasto com aquele
                    procedimento e está mudando vidas. Lembrando que, esse projeto é sem fins lucrativos,
                    ou seja tudo aquilo que ganharmos com ajudas de terceiros terá que ser convertido em 
                    benfeitorias. Porém se você é proprietário daquele conteúdo, daquele material presencial,
                    ou em forma virtual, não á mal algum em alguma pessoa chegar em você e como forma de 
                    agradecimento lhe dar alguma quantia em R$. Desde que aquilo fornecido pelo projeto seja 
                    totalmente documentado, representado em notas, mostrado de forma 1000% transparente.
                </p>

                <li>Com Ajuda Financeira de Custos</li>

                <p>
                    Nesse terceiro modelo de contribuição você ficará informado corretamente sobre 
                    todo o processo. 
                    <br></br>
                    Para todas as pessoas irão contribuir com o projeto de maneria financeira, será
                    mostrado com total clareza todo os custos do projeto para aquelas pessoas que se 
                    mostrarem a fim de saber mais sobre o mesmo. Sendo assim documentos, recibos, notas,
                    fotos, e o que puder fazer para que possamos mostrar todos os detalhes de todo o processo
                    com tota clareza e tranquilidade a fim de não deixar dúvida alguma sobre o que estará 
                    acontecendo no projeto todo. Então quem doar qualquer quantia 
                    pode <Link to='/contato' className='contato'>entrar em contato conosco.</Link> Para que tudo
                    seja lhe mostraado de maneira transparente.

                </p>

                <h4>Agradecimentos</h4>

                <p className='margin-bottom'>
                    O Projeto, o mundo, as pessoas agradeçem de coração a você que fez esse tipo de iniciativa, pois, 
                    conhecimento é algo sempre bem-vindo e realmente pode sim transformar a vida de milhares de pessoas.
                </p>

            </div>
            
        </ContribuirContainer>
    )
}

export default Contribuir

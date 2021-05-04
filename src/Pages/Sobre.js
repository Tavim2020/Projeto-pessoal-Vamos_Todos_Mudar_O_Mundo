import React from 'react'
import { SobreContainer } from './Styles/styleSobre'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Sobre = () => {

    const { setStatePageNotFound, setFooterGlobal } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setStatePageNotFound(false);
        setFooterGlobal(false);
    })

    return (
        <SobreContainer>

            <div className='containerInternoSobre'>

                <h3>Apresentação</h3>

                <p>
                    Para você que não me conhece ou está aqui para saber mais sobre o projeto e 
                    suas benfeitorias ou pensamentos futuros, acredito que a melhor forma 
                    de lhe mostrar isso é inicialmente me aprensentando e levando a você toda a 
                    informação para que com total transparencia você esteja ciente de tudo.
                </p>

                <p>Bom... vamos lá!</p>


                <p>
                    Olá, me chamo Otávio dos Santos Lopes, moro na cidade de Orlândia/SP e sou 
                    uma pessoas simples como uma outra qualquer. Pai de três filhos lindos e 
                    dedicado na medida do possível para seus filhos, pois não moro com eles 
                    atualmente. Tenho um bom coração para as pessoas a minha volta, incluindo 
                    família, amigos, colegas, etc. Atualmente um Desenvolvedor Web Júnior anonimo nas horas
                    vagas com 1 ano de Experiência e sempre em busca de subir para
                    um próximo nível. Tenho experiência em outras áreas nas quais quero compartilhar 
                    todo meu conhecimento através de vídeos, iniciativas e de diversas formas 
                    de levar isso para um determinado público.
                </p>


                <h3>Sobre O Projeto</h3>


                <p>
                    Com o intuito inicial de levar conhecimento para o mundo
                    através também da tecnologia, agregando valores a pessoas e muito aprendizado
                    resolvi fazer esse projeto com o melhor propósito possível de juntar pessoas 
                    dispostas a mudar o mundo através de gestos. Atitudes nas quais com muito 
                    esforço e dedicação conseguiremos mudar pessoas e transformar vidas.
                    Vidas nas quais nos dias atuais com tantos desastres, seja COVID-19, seja pessoas
                    com nenhuma compaixão pelo próximo devemos sim parar de olhar
                    para o próprio umbigo e enxergar que pessoas podem sim mudar, basta mostrar para elas
                    o caminho das pedras e coisas boas que as auxiliem no seu desenvolvimento mental 
                    e físico. Devemos sim querer um mundo melhor para nossos filhos, netos, bisnetos, 
                    amigos, familiares com mais igualdade social, menos periculosidade, pessoas 
                    dispostas a querer ajudar outras pessoas, dividir informações, e transformar 
                    vidas extendendo a mão. E é justamente pensando assim que hoje venho até aqui 
                    com o propósito de em minhas horas vagas ou... em determinados períodos do meu dia
                    estar levando, acrescentando, somando coisas boas a esse mundo.
                </p>

                <h3>Iniciativas do Projeto</h3>

                <p>
                    Esse projeto tem iniciativa de buscar um público alvo e com as melhores 
                    das boas intenções, levar e compartilhar informações de modo aberto. Levando 
                    e trasendo conhecimentos variados.
                </p>

                <li>O que São Esses Conhecimentos Variados?</li>

                <p>
                    Quando digo de conhecimentos variados significa informações de diferentes áreas
                    nas quais conheço e me sinto com total liberdade em querer compartilhar aquilo com 
                    pessoas a fim de expandir os conhecimentos daquele público. 
                </p>

                <li>Que áreas esse projeto tem o objetivo de alcançar?</li>


                <p>
                    Esse projeto tem o Objetivo inicial de alcançar todas as áreas do mercado mundial, 
                    desde que se encontre pessoas iguais a mim dispostas a mudar vidas através de ensinamentos.
                    Eu(Otávio dos Santos Lopes), estou disposto a ensinar o que sei na área da tecnologia, 
                    lembrando que não sou um especialista nem nada na área, mais o que sei seja pouco ou
                    muito para quem não sabe absolutamente nada será implantado nesse projeto.
                    Com conceitos básicos de maneira bem, bem detalhada do que sei, buscando explicar 
                    o máximo e ensinar pessoas a saber como funcionam certas coisas. Sendo assim a pessoas
                    na qual tiver acesso a esse conteúdo podera muito bem ir atrás de mais informações e 
                    a cada dia mais conseguir mais conhecimento.
                </p>



                <li>O Projeto Abrangera de Você Apenas a Área da Tecnologia?</li>

                <p>
                    Não. Eu estou aqui para ensinar exatamente tudo que sei sobre qualquer assunto.
                    Trabalhei e trabalho com serviços na parte de construção civil, com a pintura 
                    residencial, industrial e predial aonde venho de uma família de pessoas que tem um 
                    histórico de 27 anos com esse tipo de serviço. Sei conceitos também na parte de mixagem(Virtual Dj),
                    básico mais estou disposto a ensinar o que sei para outras pessoas através de video, 
                    dentre outros métodos. Também tenho anos de conhecimento como estrutor de Tênis aonde pratico 
                    o esporte desde novo com os meus 9 anos de idade através de um projeto da época, e esse 
                    meu projeto(Vamos Todos Mudar O Mundo), irá levar o esporte a crianças com intuito de 
                    fazer eles terem contato com o esporte de maneira a aprofundarem no mesmo e 
                    se tornarem além de grandes esportistas, mais também grandes pessoas.
                </p>


                <li>De que Forma o Projeto Ocorrerá?</li>

                <p>
                    O projeto ocorrerá de maneira virtual e presencial. Maneira virtual será repassado os 
                    vídeos com conteúdos sobre programação, reforma residencial(Parte de Pintura) 
                    e presencial de forma a divulgar em minha cidade sobre o projeto na parte esportiva 
                    aonde em quadras públicas será reunido um grupo de crianças dividido por aulas
                    de 30Min(Minutos) em horários diferentes com no máximo 6 crianças devido a COVID-19 
                    respeitando todas as regras de distanciamento socia e  utilização de alcool gel.
                </p>


                <li>Que Forma Podemos Contribuir Com o Projeto?</li>

                <p>
                    As contribuições para o projeto podem ocorrer de diversas formas. Para as pessoas
                    que gostariam de contribuir com o projeto com ajuda de custo, favor entrar 
                    em <Link className='contato' to='/contato'>contato conosco.</Link> Para pessoas que gostariam de 
                    contribuir de maneira a agregar conhecimento, poste vídeos sobre o que você sabe
                    fazer de maneira bem detalhada em seus Storyes, seja no WhatsApp, Facebook, 
                    Instagram com a HashTag(<strong>#VamosTodosMudarOMundo</strong>) e leve seu conhecimento além, destruia
                    barreiras, construa vidas. E para as pessoas que gostariam de ajudar de maneira presencial,
                    entre em contato conosco, de forma bem transparente que conversaremos de maneira a você 
                    fazer algo em sua cidade, comunidade, etc...
                </p>

                <h3 className='project'>Projeto Vamos Todos Mudar O Mundo</h3>

                <h4>
                    "Não viva sua vida em vão, agrege conhecimento e somente assim crie boas iniciativas
                    e viva eternamente na boca de muitas pessoas de maneira orgulhosa."
                </h4>

                <h4>
                    "O conhecimento é como uma caixinha de objetos, se com o tempo a gente não levar
                    aquilo para frente de maneira a prosperar o mesmo, com o tempo a própria terra
                    consome aquilo e ninguém mais será capaz de cultivar o mesmo. Então tenha boas práticas
                    cultive conhecimentos e agrege valores para a vida de terceiros."                
                </h4>

            </div>
            
        </SobreContainer>
    )
}

export default Sobre

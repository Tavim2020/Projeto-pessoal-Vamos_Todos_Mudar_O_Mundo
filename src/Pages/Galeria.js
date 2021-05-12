import React from 'react'
import { GlobalContext } from '../Context/GlobalContext';
import { GaleryContainer } from './Styles/styleGaleria';

const Galeria = () => {

    const { setStatePageNotFound, setFooterGlobal, mobile } = React.useContext(GlobalContext);

    const mainImage = React.useRef();

    React.useEffect(()=>{
        setStatePageNotFound(false);
        setFooterGlobal(false);
    })

    function changeImage(event){
        const src = event.target.src;
        const mainSrc = mainImage.current.src;
        mainImage.current.src = src;
        event.target.src = mainSrc;

    }

    return (
        <GaleryContainer>

            <div className='interno'>

                <div className='main-image'>

                    <img ref={mainImage}src='imagens/criancasFelizes.jpeg' alt='Crianças Felizes' />

                </div>


                <div className='otherImg'>

                    {!mobile && <img onClick={changeImage} src='imagens/mulherSorrindo.jpeg' alt='Mulher Sorrindo' />}

                    {!mobile && <img onClick={changeImage} src='imagens/aprendendo.jpg' alt='Aprendendo' />}

                    {!mobile && <img onClick={changeImage} src='imagens/mulherAprendendo.jpeg' alt='Mulher Aprendendo' />}


                    {mobile && (
                        <div className='mobilePhotos'> 


                            <img onClick={changeImage} src='imagens/mulherSorrindo.jpeg' alt='Mulher Sorrindo' />

                            <img onClick={changeImage} src='imagens/aprendendo.jpg' alt='Aprendendo' />

                            <img onClick={changeImage} src='imagens/mulherAprendendo.jpeg' alt='Mulher Aprendendo' />

                        </div>
                    )}

                    {mobile && (
                        <div className='containerMobileImg'>

                            <img onClick={changeImage} src='imagens/familiaAprendendo.jpeg' alt='Família Aprendendo' />

                            <img onClick={changeImage} src='imagens/compartilhandoConhecimento.jpg' alt='Compartilhando Conhecimento' />

                        </div>
                    )}

                    {!mobile && <img onClick={changeImage} src='imagens/familiaAprendendo.jpeg' alt='Família Aprendendo' />}

                    {!mobile && <img onClick={changeImage} src='imagens/compartilhandoConhecimento.jpg' alt='Compartilhando Conhecimento' />}

                </div>



            </div>
            
        </GaleryContainer>
    )
}

export default Galeria

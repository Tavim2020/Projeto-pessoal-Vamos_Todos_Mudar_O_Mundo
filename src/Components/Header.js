import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';
import { HeaderContainer } from './styleHeader';

const Header = () => {

    const { mobile } = React.useContext(GlobalContext);
    const [menu, setMenu] = React.useState(false);

    function toggleMenu(){
        setMenu(!menu);
    }


    React.useEffect(()=>{
        if(window.screen.width <= 980){
            setMenu(true);

            setTimeout(()=>{
                setMenu(false);
            }, 2000)

        }


    }, [])

   
    return (
        <HeaderContainer menu={menu}>

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



                {mobile && (
                    <div className='containerMobile'>

                        <div className='menu-fixed'>

                            <div className='left-Mobile'>
                                <Link className='Home-Link-Mobile' to='/'>Vamos Todos Mudar O Mundo?</Link>
                            </div>



                            <div className='icon-menu' menu={menu.value}>

                                <img onClick={toggleMenu} 
                                src={menu ? 'imagens/close-button.svg' : 'imagens/menu.svg'} 
                                alt='Icone-Menu' 
                                menu={menu.value}/>

                            </div>

                        </div>
                

                        {menu && <div className='menuMobile'>

                            <nav>

                                <Link className='Sobre-Link-Mobile' to='/sobre'>Sobre/Quem Sou</Link>

                                <Link className='Contribuir-Link-Mobile' to='/contribuir'>Contribuir</Link>

                                <Link className='Contato-Link-Mobile' to='/contato'>Contato</Link>

                                <Link className='Galeria-Link-Mobile' to='/galeria'>Galeria</Link>

                            </nav>

                        </div>}
                    </div>
                )}


            </div>
            
        </HeaderContainer>
    )
}

export default Header

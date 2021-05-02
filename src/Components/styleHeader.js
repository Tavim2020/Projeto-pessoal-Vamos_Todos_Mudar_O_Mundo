import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 7.2vw;
    background-color: var(--quase-branco);

    .containerInterno{
        margin: 0 auto;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left{
            width: 40%;
            
            .Home-Link{
                font-size: 1.8vw;
                font-weight: 600;
                color: var(--azul-escuro);
            }
        }


        .right{
            flex: 1;
            margin-left: 7vw;
            display: flex;
            justify-content: flex-end;

            nav{
                display: flex;
                align-items: center;


                .Sobre-Link{
                    font-size: 1.4vw;
                    font-weight: 500;
                    color: var(--azul-escuro);
                    margin-right: 2vw;
                    

                    &::after{
                        content: '';
                        display: block;
                        margin: 0 auto;
                        width: 0;
                        height: 0.08vw;
                        background-color: var(--azul-escuro);
                        transition: 0.5s;
                    }

                    &:hover{
                        &::after{
                            margin: 0 auto;
                            width: 90%;
                        }
                    }

                }

                .Contribuir-Link{
                    font-size: 1.4vw;
                    font-weight: 500;
                    color: var(--azul-escuro);
                    margin-right: 2vw;


                    &::after{
                        content: '';
                        display: block;
                        margin: 0 auto;
                        width: 0;
                        height: 0.08vw;
                        background-color: var(--azul-escuro);
                        transition: 0.5s;
                    }

                    &:hover{
                        &::after{
                            margin: 0 auto;
                            width: 90%;
                        }
                    }
                }

                .Contato-Link{
                    font-size: 1.4vw;
                    font-weight: 500;
                    color: var(--azul-escuro);
                    margin-right: 2vw;


                    &::after{
                        content: '';
                        display: block;
                        margin: 0 auto;
                        width: 0;
                        height: 0.08vw;
                        background-color: var(--azul-escuro);
                        transition: 0.5s;
                    }

                    &:hover{
                        &::after{
                            margin: 0 auto;
                            width: 90%;
                        }
                    }
                }

                .Galeria-Link{
                    font-size: 1.4vw;
                    font-weight: 500;
                    color: var(--azul-escuro);


                    &::after{
                        content: '';
                        display: block;
                        margin: 0 auto;
                        width: 0;
                        height: 0.08vw;
                        background-color: var(--azul-escuro);
                        transition: 0.5s;
                    }

                    &:hover{
                        &::after{
                            margin: 0 auto;
                            width: 90%;
                        }
                    }
                }
            }
        }


    }
`;
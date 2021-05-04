import styled  from 'styled-components';

export const GlobeContainer = styled.section`
    width: 100vw;
    height: 43vw;
    background-color: var(--azul);


    .background{
        width: 100%;
        opacity: 0.05;
        position: absolute;
        left: 0;
        top: -35%;
        pointer-events: none;
    }

    .ContainerInternoGlobo{
        margin: 0 auto;
        width: 90%;
        height: 100%;
        display: flex;


        .leftContainer{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .title{
                width: 100%;
                height: 85%;
                display: flex;
                align-items: center;

                h1{
                    font-size: 3.2vw;
                    width: 70%;
                    color: var(--white);
                    line-height: 1.1;

                    strong{
                        color: var(--amarelo-atencao);
                    }
                }
            }


            .icons{
                width: 100%;
                height: 5%;
                display: flex;
                align-items: flex-end;

                img{
                    width: 4vw;
                    border-radius: 1.2vw;
                }

                img:nth-child(2),
                img:nth-child(3),
                img:nth-child(4),
                img:nth-child(5){
                    margin-left: 2vw;
                }

                img:nth-child(4),
                img:nth-child(5){
                    cursor: pointer;


                    &:hover{
                        animation: moveImage 100ms 1;
                        animation-duration: 1.5s;

                        @keyframes moveImage{
                            30%{
                                transform:  scale(0.8)
                            };
                            40%{
                                transform: scaleY(1) rotateZ(45deg);
                            }
                            80%{
                                transform: rotateZ(-45deg);
                            }

                        }
                    }
                }
            }

        }


        /* estilizando o globo terrestre */
        .globo-terrestre{
            width: 52vw;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        

            .globo{
                width: 36vw;
                height: 35vw;
                border-radius: 50%;
                animation-name: rotate-globo;
                animation-duration: 25s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                background-image: url('../imagens/mapa.jpg');
                background-size: cover;
                background-repeat: repeat-x;
                object-fit: cover;
                box-shadow: 0 0.4vw 1.2vw var(--cinza-claro);
                -webkit-box-reflect: below 0px linear-gradient(transparent, transparent);
                
            }

            @keyframes rotate-globo{
                0%{
                    transform: rotateZ(23deg);
                    background-position: 0px;
                }

                to{
                    transform:  rotateZ(23deg);
                    background-position: 70vw;
                }
            };


        }

    }


    @media(max-width: 980px){
        width: 100vw;
        height: 93vw;
        background-color: var(--azul);


        .background{
            top: -0%;
        }

        .ContainerInternoGlobo{
            flex-direction: column;


            .leftContainer{
                margin: 0 auto;
                width: 70%;
                align-items: center;
                justify-content: center;

                .title{
                    margin: 0 auto;
                    width: 100%;
                    height: 85%;
                    display: flex;
                    align-items: center;

                    h1{
                        font-size: 4.8vw;
                        width: 100%;
                        text-align: center;
                    }
                }


                .icons{
                    width: 100%;
                    height: 5%;
                    display: flex;
                    align-items: flex-end;

                    img{
                        width: 9vw;
                        border-radius: 1.2vw;
                    }

                    img:nth-child(2),
                    img:nth-child(3),
                    img:nth-child(4),
                    img:nth-child(5){
                        margin-left: 4.2vw;
                    }
                }

            }


            /* estilizando o globo terrestre */
            .globo-terrestre{
                margin: 0 auto;
                justify-content: center;
            }

        }
    }
`;


export const SectionObjetivo = styled.section`
    width: 100vw;
    height: 40vw;
    background-color: var(--white);

    .divInterna{
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;

        .titleObjetivo{
            width: 100%;
            height: 8.2vw;
            display: flex;
            align-items: center;

            h3{
                font-size: 1.8vw;
                font-weight: 500;
                color: var(--azul-escuro);
            }
        }

        .containerTextAndImage{
            flex: 1;
            display: flex;
            align-items: center;

            .textAndButton{
                width: 55%;

                p{
                    font-size: 1.6vw;
                    line-height: 2vw;
                    color: var(--azul-escuro);
                    margin-bottom: 5vw;
                }

                .buttonSaibaMais{
                    width: 13vw;
                    margin-left: 7.5vw;
                    height: 4.5vw;
                    background-color: var(--azul);
                    color: var(--white);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 0.18vw solid #555;
                    font-size: 1.3vw;
                    transition:  background 0.5s;


                    &:hover{
                        background-color: var(--button-hover);
                    }
                }
            }


            .imageContainer{
                width: 45%;
                display: flex;
                justify-content: flex-end;

                img{
                    width: 25vw;
                }
            }

        }

    }

    @media(max-width: 980px){
        height: 118vw;

        .divInterna{
            .titleObjetivo{
                height: 12.2vw;
                justify-content: center;

                h3{
                    font-size: 3.8vw;
                }
            }

            .containerTextAndImage{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;

                .textAndButton{
                    margin: 0 auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    p{
                        margin: 0 auto;
                        font-size: 3.4vw;
                        line-height: 6vw;
                        margin-bottom: 8vw;
                        text-align: center;
                        width: 90%;
                    }

                    .buttonSaibaMais{
                        margin: 0 auto;
                        width: 26vw;
                        margin-left: 0;
                        height: 10.5vw;
                        border: 0.18vw solid #555;
                        font-size: 3.1vw;
                        transition:  background 0.5s;
                    }
                }


                .imageContainer{
                    display: none;
                }

            }

        }

    }
    
`;


export const CotainerContato = styled.section`
    width: 100vw;
    height: 25vw;
    background-color: var(--quase-branco);

    .contato{
        margin: 0 auto;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3{
            font-size: 1.8vw;
            color: var(--azul-escuro);
            margin-bottom: 3vw;
        }

        .first-P{
            width: 90%;
            font-size: 1.6vw;
            line-height: 2vw;
            color: var(--aazul-escuro);
            text-align: center;
            margin-bottom: 3vw;

            .color-blue{
                color: var(--azul);

                &:hover{
                    text-decoration: underline;
                }
            }
        }

        .secondy-P{
            font-size: 1.4vw;
            font-weight: 600;
            color: var(--cinza-claro);

        }
    }

    @media(max-width: 980px){
        height: 75vw;

        .contato{

            h3{
                font-size: 3.8vw;
                margin-bottom: 6vw;
            }

            .first-P{
                font-size: 3.4vw;
                line-height: 4.5vw;
                margin-bottom: 6vw;
            }

            .secondy-P{
                font-size: 3.2vw;
                width: 90%;
                text-align: center;

            }
        }
    }
`;

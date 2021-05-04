import styled from 'styled-components';


export const ContatoContainer =  styled.main`
    width: 100vw;
    height: 100%;
    background-color: var(--white);

    .container-wrapper{
        margin: 0 auto;
        width: 90%;

        .titleContato{
            width: 100%;
            display: flex;
            flex-direction: column;

            h2{
                text-align: center;
                color: var(--azul-escuro);
                margin-top: 3vw;
                font-size: 2.5vw;
                margin-bottom: 3vw;
            }

            h4{
                font-size: 1.4vw;
                line-height: 2vw;
                color: var(--azul-escuro);
                margin-bottom: 2.2vw;

                img{
                    width: 1.5vw;
                    margin-left: 2vw;
                }
            }

        }


        .formAndCosts{
            width: 100%;
            display: flex;
            margin-bottom: 3vw;

            form{
                width: 49%;
                display: flex;
                flex-direction: column;

                label{
                    font-size: 1.55vw;
                    font-weight: 500;
                    color: var(--azul-escuro);
                    text-align: center;
                    margin-top: 2.2vw;
                    margin-bottom: 1vw;

                    strong{
                        font-size: 1.55vw;
                        text-transform: uppercase;
                        color: var(--amarelo-atencao);
                    }
                }

                input{
                    outline: none;
                    border: none;
                    background-color: var(--quase-branco);
                    height: 3vw;
                    padding-left: 1vw;
                    font-size: 1.55vw;
                    letter-spacing: 0.1vw;
                }

                p{
                    font-size: 1.3vw;
                    color: var(--azul-escuro);
                }

                select{
                    height: 3vw;
                    font-size: 1.55vw;
                    padding-left: 1vw;
                    color: var(--azul-escuro);
                }

                textarea{
                    max-width: 100%;
                    max-height: 15vw;
                    min-width: 100%;
                    min-height: 10vw;
                    font-size: 1.55vw;
                    padding-left: 1vw;
                    padding-right: 1vw;
                    padding-top: 0.5vw;
                    padding-bottom: 0.5vw;
                    letter-spacing: 0.1vw;
                    line-height: 2vw;
                }

                .textarea-length{
                    margin-bottom: 3vw;
                }

            }

            .division{
                width: 0.08vw;
                height: 78vw;
                background-color: var(--azul-escuro);
                display: flex;
                margin-left: 2vw;
                margin-top: 3.7vw;
            }


            .anonymous-payment{
                width: 49%;
                display: flex;
                align-items: center;
                justify-content: center;
                
                p{
                    text-align: center;
                    font-size: 1.6vw;
                    font-weight: 400; 
                    color: var(--azul-escuro);

                    .payment{
                        font-weight: 700; 
                        color: var(--green);

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

       

    }


    footer{
        width: 100vw;
        height: 20vw;
        background-color: var(--azul);

        .containerInternoFooter{
            margin: 0 auto;
            width: 90%;
            padding-top: 3vw;

            h3{
                margin-bottom: 2.2vw;
                color: var(--white);
                font-size: 2.2vw;
                text-align: center;
            }
            

            h4{
                color: var(--white);
                font-size: 1.4vw;
            }
        }
    }
    
`;
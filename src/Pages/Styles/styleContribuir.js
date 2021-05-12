import styled from 'styled-components';

export const ContribuirContainer = styled.article`
    width: 100vw;
    height: 100%;
    background-color: var(--white);

    .wrapper{
        margin: 0 auto;
        width: 90%;


        h3{
            font-size: 1.8vw;
            margin-top: 3vw;
            margin-bottom: 3vw;
            color: var(--azul-escuro);
        }

        h4{
            font-size: 1.4vw;
            line-height: 2vw;
            color: var(--azul-escuro);
            text-align: center;
            margin-bottom: 2.2vw;
            margin-top: 2.2vw;
        }


        p{
            font-size: 1.6vw;
            line-height: 2.2vw;
            color: var(--azul-escuro);

            strong{
                color: var(--green);
            }

            .sobre{
                color: var(--azul);

                &:hover{
                    text-decoration: underline;
                }
            }
        }

        li{
            font-size: 1.75vw;
            list-style: decimal-leading-zero;
            margin-top: 2vw;
            margin-bottom: 2vw;
            color: var(--azul-escuro);
        }

        .contato{
            color: var(--amarelo-atencao);

            &:hover{
                text-decoration: underline;
            }
        }

        .margin-bottom{
            margin-bottom: 3vw;
        }
    }

    @media(max-width: 980px){
        .wrapper{
            h3{
                font-size: 4.5vw;
                margin-top: 6vw;
                margin-bottom: 6vw;
                text-align: center;
            }

            h4{
                font-size: 3.8vw;
                line-height: 4vw;
                margin-bottom: 4.5vw;
                margin-top: 4.5vw;
                text-align: center;
            }


            p{
                font-size: 4.1vw;
                line-height: 4vw;
                text-align: center;
            }

            li{
                font-size: 4.35vw;
                margin-top: 8vw;
                margin-bottom: 6vw;
                text-align: center;
            }
            .margin-bottom{
                margin-bottom: 6vw;
            }
        }
    }

`;
import styled from 'styled-components';

export const SobreContainer = styled.article`
    width: 100vw;
    height: 100%;
    background-color: var(--white);

    .containerInternoSobre{
        margin: 0 auto;
        width: 90%;
        

        h3{
            font-size: 1.8vw;
            margin-top: 3vw;
            margin-bottom: 3vw;
            color: var(--azul-escuro);
        }

        p{
            font-size: 1.6vw;
            line-height: 2.2vw;
            color: var(--azul-escuro);

            strong{
                color: var(--green);
            }
        }

        li{
            font-size: 1.75vw;
            list-style: decimal-leading-zero;
            margin-top: 2vw;
            margin-bottom: 2vw;
            color: var(--azul-escuro);
        }

        h4{
            font-size: 1.4vw;
            line-height: 2vw;
            color: var(--azul-escuro);
            text-align: center;
            margin-bottom: 2.2vw;
        }

        h4:last-child{
            margin-bottom: 3vw;
        }

        .project{
            text-align: center;
        }

        .contato{
            color: var(--amarelo-atencao);

            &:hover{
                text-decoration: underline;
            }
        }
    }


    @media(max-width: 980px){
        .containerInternoSobre{
            h3{
                font-size: 4.5vw;
                margin-top: 6vw;
                margin-bottom: 6vw;
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
            }

            h4{
                font-size: 3.8vw;
                line-height: 4vw;
                margin-bottom: 4.5vw;
            }

            h4:last-child{
                margin-bottom: 6vw;
            }
        }
    }
`;
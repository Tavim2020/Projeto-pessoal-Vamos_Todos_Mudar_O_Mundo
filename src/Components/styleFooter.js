import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 20vw;
    background-color: var(--azul);

    .footerContainer{
        margin: 0 auto;
        width: 90%;
        height: 100%;


        h3{
            margin: 0 auto;
            width: 90%;
            text-align: center;
            color: var(--quase-branco);
            font-weight: 600;
            font-size: 1.8vw;
            padding-top: 3vw;
            margin-bottom: 3vw;

            .color-yellow{
                color: var(--amarelo-atencao);
            }
        }

        .iconsFooter{
            margin: 0 auto;
            width: 13%;
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 3vw;

            img{
                width: 4vw;
                border-radius: 1.2vw;
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

        h4{
            font-size: 1.4vw;
            color: var(--white);
            text-align: center;
        }
    }


    @media(max-width: 980px){
        height: 50vw;

        .footerContainer{
            h3{
                font-size: 3.8vw;
                padding-top: 6vw;
                margin-bottom: 6vw;
            }

            .iconsFooter{
                margin: 0 auto;
                width: 33%;
                margin-bottom: 6vw;

                img{
                    width: 9vw;
                }
            }

            h4{
                font-size: 3.1vw;
            }
        }
    }

`;
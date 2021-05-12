import styled from 'styled-components';

export const GaleryContainer = styled.section`
    width: 100vw;
    height: 65vw;
    background-color: var(--white);

    .interno{
        margin: 0 auto;
        width: 90%;
        height: 100%;


        .main-image{
            margin: 0 auto;
            width: 70%;
            height: 65%;
            margin-top: 3vw;
            background-color: var(--quase-branco);
            border-radius: 1.2vw;
            outline: none;
            margin-bottom: 3vw;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1.2vw;
            }
        }

        .otherImg{
            width: 100%;
            height: 25%;
            display: flex;


            img{
                margin: 0 auto;
                width: 15%;
                height: 80%;
                object-fit: cover;
                border-radius: 1.2vw;
                margin-right: 2.5vw;
                cursor: pointer;
            }
        }
    }


    @media(max-width: 980px){
        height: 170vw;

        .interno{


            .main-image{
                width: 100%;
                height: 50%;
                margin-top: 6vw;
                margin-bottom: 6vw;
            }

            .otherImg{
                margin-top: 15vw;
                width: 100%;
                display: flex;
                flex-direction: column;

                .mobilePhotos{
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 4vw;

                    img{
                        width: 100%;
                        height: 28vw;
                    }
                        
                }

                
                .containerMobileImg{
                    margin: 0 auto;
                    width: 70vw;
                    display: flex;
                    align-items: center;

                    img{
                        width: 28vw;
                        height: 28vw;
                        margin-top: 4vw;
                    }
                }

            }

        }
    }
`;
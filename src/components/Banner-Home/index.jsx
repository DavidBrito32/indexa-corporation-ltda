import 'boxicons';
import { styled } from 'styled-components';
import ART from './assets/ART.svg'

const ContainerBanner = styled.div`
    width: 100%;
    height: calc(100vh - 12.9vh);
    display: flex;
    background-color: #4f6e7a;
    
        & .image-banner{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
                & img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
        }

        & .texto-banner{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 0 50px;

                & h1{
                    width: 100%;
                    text-align: center;
                    color: #f8be00;
                    font-size: 2.8rem;
                }

                & .slogan{
                    width: 100%;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    
                    & h3{
                        width: 100%;
                        color: gold;
                        font-size: 1.5rem;
                    }

                    & h4{
                        width: 100%;
                        color: white;
                        font-size: 1.5rem;
                    }

                    & ul{
                        width: 100%;
                        height: 50%;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: column;

                            & li{
                                font-size: 1.2rem;
                                gap: 10px;
                                font-style: italic;
                                font-weight: bold;
                                display: flex;
                                align-items: center;
                                    & box-icon{
                                        fill: yellow;
                                    }
                            }
                    }
                }

        }
`;

const Banner = () => {

    return (
        <>
            <ContainerBanner>
                <div className="image-banner">
                        <img src={ART} alt="" />
                </div>

                <div className="texto-banner">
                    <h1>Bem vindo a Indexa Corporation</h1>

                    <div className="slogan">
                        <h3>Sua empresa precisa de credito?</h3>
                        <h3>A Indexa Te Ajuda !</h3>
                        <h4>Nossos Serviços:</h4>
                        <ul>
                            <li><box-icon name='money-withdraw'></box-icon>Recuperação Financeira de Credito</li>
                            <li><box-icon name='bank' type='solid' ></box-icon>Intermediação Financeira em instituições bancarias</li>
                            <li><box-icon name='file-find' type='solid' ></box-icon>Consultas Cadastrais de alto nivel</li>
                            <li><box-icon name='business' type='solid' ></box-icon>Consultoria Empresarial</li>
                            <li><box-icon name='candles' ></box-icon>Auditorias Empresariais</li>
                            <li><box-icon name='bar-chart-alt-2' type='solid' ></box-icon>Fundos de Investimento</li>
                        </ul>
                    </div>
                </div>

            </ContainerBanner>
        </>
    )
}

export default Banner;
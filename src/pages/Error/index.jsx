import { styled } from 'styled-components';
import ErrorImage from './assets/ErrorMessage.png';
import Logo from './assets/LOGO.png';
import { Link } from 'react-router-dom';

const ContainerError = styled.div`
    width: 100%;
    height: calc(100vh - 13vh);
    background-color: #2f4653;
    display: flex;
    justify-content: center;
    align-items: center;

        & .error-image{
            width: 50%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
                & img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
        }

        & .error-text{
            width: 50%;
            height: 100%;
            background-color: #1f1e27de;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            color: white;

                & a{
                    width: 200px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    background-color: black;
                    color: white;
                    font-weight: bold;
                    transition-duration: 400ms;
                        &:hover{
                            background-color: #1d1d1d;
                            color: yellow;
                        }
                }

                & img{
                    width: 400px;
                }
        }
`

const ErrorPage = () => {

    return (
        <>
            <ContainerError>
                <div className="error-image">
                    <img src={ErrorImage} alt="" />
                </div>
                <div className="error-text">
                    <h1>Desculpe, Esta pagina não esta disponivel :(</h1>
                    <h3>Este conteudo deve estar em manutenção ou foi removido</h3>
                    <Link to="/">Voltar a segurança</Link>
                    <img src={Logo} alt="Imagem Logo" />
                </div>
            </ContainerError>
        </>
    )
}

export default ErrorPage;
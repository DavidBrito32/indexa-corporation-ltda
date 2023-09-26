import { styled } from 'styled-components';
import document from './assets/docs/CheckList Documental.pdf';
import bg from './assets/bg.svg';

const ContainerDocs = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

        & .texto{
            width: 50%;
            height: 100%;
            background-color: #333333;
            display: flex;
            padding: 0 30px;
            align-items: center;
            gap: 30px;
            flex-direction: column;
            color: white;

                    & h1{
                        margin-top: 50px;
                    }
                    & a{
                        color: yellow;
                            &:hover{
                                color: blue;
                            }
                    }
            
        }

        & .image-docs{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

                & img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
        }

`;
const Documentos = () => {

    return (
        <>
            <ContainerDocs>
                <div className="texto">
                    <h1>Gostaria de Inciar um processo?</h1>
                    <p>Após a triagem inicial</p>
                    <p>Precisamos dos documentos de sua empresa</p>
                    <h3>Veja a nossa lista de documentos <a target='_blank' rel='noreferrer' href={document}>clicando aqui</a></h3>

                    <div className="mensagem">
                        <h3>Atenção!</h3>
                        <p>A Indexa Não liga para ninguem solicitando dados de contas bancarias, senhas e outras informações de cunho sigiloso e pessoal por tanto caso alguem entre em contato solicitando tais dados <strong>É FAKE</strong>. Nos avise imediatamente caso isso ocorra. Esperamos que você tenha uma boa experiência conosco!</p>

                        <h2>Whatsapp: <a href="tel: (85)99943-3743">Fale Conosco</a> </h2>
                        <h2>E-mail: <a href="mailto:diretoria@indexacorporation.com.br">diretoria@indexacorporation.com.br</a> </h2>
                    </div>
                </div>

                <div className="image-docs">
                    <img src={bg} alt="" />
                </div>
            </ContainerDocs>         
        </>
    )
}

export default Documentos;
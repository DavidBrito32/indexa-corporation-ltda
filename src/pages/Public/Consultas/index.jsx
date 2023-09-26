/* eslint-disable react/jsx-no-target-blank */
import { styled } from "styled-components";
import ART from "./assets/ART.svg";
import BG from "./assets/BG.svg";

const ContainerConsulta = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & .listaConsulta {
    width: 50%;
    height: 100%;
    background: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    & .container-form {
      width: 60%;
      height: 80%;
      border-radius: 8px;
      backdrop-filter: blur(8px);
      background-color: #7ea5d894;
      -webkit-box-shadow: -1px 2px 20px 18px rgba(204, 161, 204, 1);
      -moz-box-shadow: -1px 2px 20px 18px rgba(204, 161, 204, 1);
      box-shadow: -1px 2px 20px 18px rgba(204, 161, 204, 1);
      display: flex;
      flex-direction: column;
      align-items: center;

      & h3 {
        font-size: 1.5rem;
        text-align: center;
        color: black;
      }

      & table {
        width: 100%;
        border: 2px solid black;

        & .Ficha{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            font-weight: bold;
            background-color: #000000;
            color: yellow;
            justify-content: space-around;

                & a{
                    color: red;
                }
        }

        & tr {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          &:nth-child(odd) {
            background-color: #333333;
          }
          &:nth-child(even) {
            background-color: #58967e;
          }

        & a{
            width: fit-content;
            color: #ffa600;
            display: block;
                &:hover{
                    color: blue;
                    background-color: black;
                    
                }
        }

          & td {
            width: 50%;
            height: 50px;
            color: white;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;

            & p{
                width: 100%;
                display: flex;
                justify-content: center;
                gap: 5px;

                    & span{
                        & a{
                            color: #ffdc17;
                        }
                    }
            }

            & img {
              width: 30px;
              height: 30px;
            }
          }

          & th {
            width: 50%;
            background-color: black;
            color: white;
            font-style: italic;
          }
        }

        & h3{
            width: 100%;
            height: 50px;
            background-color: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
      }
    }
  }

  & .artConsultas {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Consultar = () => {
  return (
    <>
      <ContainerConsulta>
        <div className="listaConsulta">
          <div className="container-form">
            <h3>Relação de consultas</h3>

            <table border="1">

            <h3>Ficha Cadastral</h3>
            
                <p className="Ficha">
                <span>Cartão CNPJ</span>
                <span><a href="">Obter</a></span>
              </p>
              <tr>
                <th>Consulta</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>Receita Federal</td>
                <td>
                  <p><a target="_blank" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/Emitir">CPF</a> / <span><a target="_blank" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir">CNPJ</a></span></p>
                </td>
              </tr>
              <tr>
                <td>Sefaz - CE</td>
                <td>
                <p><a target="_blank" href="https://consultapublica.sefaz.ce.gov.br/certidaonegativa/preparar-consultar">CPF</a> / <span><a target="_blank" href="https://consultapublica.sefaz.ce.gov.br/certidaonegativa/preparar-consultar">CNPJ</a></span></p>
                </td>
              </tr>
              <tr>
                <td>ISS Fortaleza</td>
                <td>
                <p><a target="_blank" href="https://grpfor.sefin.fortaleza.ce.gov.br/grpfor/pagesPublic/certidoes/emitirCertidao.seam">CPF</a> / <span><a target="_blank" href="https://grpfor.sefin.fortaleza.ce.gov.br/grpfor/pagesPublic/certidoes/emitirCertidao.seam">CNPJ</a></span></p>
                </td>
              </tr>
              <tr>
                <td>Débitos Trabalhistas</td>
                <td>
                <p><a target="_blank" href="https://cndt-certidao.tst.jus.br/inicio.faces">CPF</a> / <span><a target="_blank" href="https://cndt-certidao.tst.jus.br/inicio.faces">CNPJ</a></span></p>
                </td>
              </tr>
              <tr>
                <td>FGTS / CAIXA</td>
                <td>
                  <a target="_blank" href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf">Clique Aqui</a>
                </td>
              </tr>
              <tr>
                <td>Antecedentes Criminais</td>
                <td>
                  <a target="_blank" href="https://www.gov.br/pt-br/servicos/emitir-certidao-de-antecedentes-criminais">Clique Aqui</a>
                </td>
              </tr>
              <h3>Possui alguma inscrição na divida ativa?</h3>
              <tr>
                <td>Divida Ativa da Receita Federal</td>
                <td>
                <p><a target="_blank" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/EmitirPGFN">CPF</a> / <span><a target="_blank" href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/EmitirPGFN">CNPJ</a></span></p>
                </td>
              </tr>
              <tr>
                <td>Divida Ativa da Prefeitura</td>
                <td>
                <a target="_blank" href="https://portal.pgm.fortaleza.ce.gov.br/consultar/debitos/em_aberto">CPF / CNPJ</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="artConsultas">
          <img src={ART} alt="arte consultas" />
        </div>
      </ContainerConsulta>
    </>
  );
};

export default Consultar;

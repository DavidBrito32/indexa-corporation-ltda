/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export const DadosEmpresasContext = createContext();

export const DadosEmpresasProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [dados, setDados] = useState(
    JSON.parse(localStorage.getItem("dados")) || []
  );
  useEffect(() => {
    if (dados.length > 0) {
      localStorage.setItem("dados", JSON.stringify(dados));
    }
  }, [dados]);
  const { form, handleForm, clearForm, handleCheckbox } = useForm({
    id: new Date(),
    data_do_cadastro: "",
    consultor: "",
    empresa: {
      cnpj: "",
      razao_social: "",
      regime_tributario: "",
      documentacao_pj: {
        ccmei: false,
        contrato_social: false,
        aditivos: "",
        alvara_de_funcionamento: false,
        faturamento: {
          data: "",
          valor: "",
        },
        matriculas: {
            qdt: "",
            inscricoes: ""
        },
        crlv_digital: {
            qtd: "",
            veiculos: ""
        }
      },
      certidoes_PJ: "",
      endereco: {
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
      },
    },
    administrador: {
      nome_completo: "",
      cpf: "",
      telefone: "",
      email: "",
      documentacao_pf: {
        rg_cpf_cnh: false,
        casado: false,
        imposto_de_renda: false,
        matriculas: {
            qdt: "",
            inscricoes: ""
        },
        crlv_digital: {
            qtd: "",
            veiculos: ""
        }
      },
      certidoes_PF: "",
      endereco: {
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        cep: "",
      },
    },
    banco: {
      instituicao: "",
      gerente: "",
      status: "",
      detalhes_da_operacao: "",
      faturamento_enviado: ""
    },
  });
  return (
    <>
      <DadosEmpresasContext.Provider
        value={{ dados, setDados, form, handleForm, clearForm, handleCheckbox }}
      >
        {children}
      </DadosEmpresasContext.Provider>
    </>
  );
};

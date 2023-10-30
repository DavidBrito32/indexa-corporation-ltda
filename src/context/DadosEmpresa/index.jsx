/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export const DadosEmpresasContext = createContext();

export const DadosEmpresasProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [dados, setDados] = useState(JSON.parse(localStorage.getItem("dados")) || []);
    useEffect(()=>{
        if(dados.length > 0){
            localStorage.setItem('dados', JSON.stringify(dados));
        }
    }, [dados])
    const { form, handleForm, clearForm } = useForm({
        id: new Date,
        data_do_cadastro: "",
        razao_social: "",
        consultor: "",
        cnpj: "",
        cpf: "",
        administrador: "",
        regime_tributario: "",
        estado_adm: "",
        certidoes_PJ: "",
        certidoes_PF: "",
        telefone: "",
        email: "",
        banco: "",
        gerente: "",
        status: "",
        detalhes_da_operacao: ""
    })
    return(
        <>
            <DadosEmpresasContext.Provider value={{dados, setDados, form, handleForm, clearForm}}>
                {children}
            </DadosEmpresasContext.Provider>
        </>
    )
}
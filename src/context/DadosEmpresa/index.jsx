/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DadosEmpresasContext = createContext();

export const DadosEmpresasProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [dados, setDados] = useState([]);
    return(
        <>
            <DadosEmpresasContext.Provider value={{dados, setDados}}>
                {children}
            </DadosEmpresasContext.Provider>
        </>
    )
}
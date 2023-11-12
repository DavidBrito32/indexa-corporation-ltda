import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Error";
import Contabil from "../pages/Contabil";
import ContactPage from "../pages/ContactPage";
import Consultas from "../pages/Consultas";
import Relatorios from "../pages/Relatorios";
import { DadosEmpresasProvider } from "../context/DadosEmpresa";
import RelatoriosPage from "../pages/RelatoriosPage";

const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/contabil" element={<Contabil />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route
              path="/cadastro"
              element={
                <DadosEmpresasProvider>
                  <Relatorios />
                </DadosEmpresasProvider>
              }
            />
            <Route
              path="/relatorios"
              element={
                <DadosEmpresasProvider>
                  <RelatoriosPage />
                </DadosEmpresasProvider>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;

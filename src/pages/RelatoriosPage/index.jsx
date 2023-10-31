import { Box, Flex, Heading } from "@chakra-ui/layout";
import CardList from "../../components/CardList";
import { Input } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { useContext, useState } from "react";
import { DadosEmpresasContext } from "../../context/DadosEmpresa";

const RelatoriosPage = () => {
    const { dados, setDados } = useContext(DadosEmpresasContext);
    const [search, setSearch] = useState("");
    console.log(dados);
    return (
        <>
            <Heading textAlign={"center"}>Relação de empresas cadastradas</Heading>
            <Box display={"flex"} gap={"15px"} m="50px 0 20px" w={"full"} justifyContent={"center"} alignItems={"center"}>
                <Input width={"400px"} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Pesquisar por CNPJ Ex: 02.018.396/0001-20 " borderColor={"#000000"} />
                <FcSearch cursor={"pointer"} fontSize={"30px"} />
            </Box>
            <Flex mb="50px" wrap={"wrap"} p="0px 10px" justifyContent={"space-around"} gap={"10px"}>
                {
                    dados
                    .filter((item) => {
                        if(search !== ""){
                            return item.cnpj.includes(search);
                        }else{
                            return item;
                        }
                    })
                    .map(item => (
                        <CardList key={item.id} empresa={item} setDados={setDados} dados={dados} />
                    ))
                }

            </Flex>
        </>
    );
};

export default RelatoriosPage;
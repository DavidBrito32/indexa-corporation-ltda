/* eslint-disable no-unused-vars */
import { Box, Heading } from "@chakra-ui/layout";
import CardList from "../../components/CardList";
import {
  Input,
  Table,
  TableContainer,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import { useContext, useState } from "react";
import { DadosEmpresasContext } from "../../context/DadosEmpresa";
import { useAxios } from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/BASE_URL";

const RelatoriosPage = () => {
  const { data, loading, error } = useAxios(BASE_URL);

  // eslint-disable-next-line no-unused-vars
  const { dados, setDados } = useContext(DadosEmpresasContext);
  const [search, setSearch] = useState("");
  console.log(data);
  return (
    <>
      <Heading textAlign={"center"}>Relação de empresas cadastradas</Heading>
      <Box
        display={"flex"}
        gap={"15px"}
        m="50px 0 20px"
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Input
          width={"400px"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquisar por CNPJ Ex: 02.018.396/0001-20 "
          borderColor={"#000000"}
        />
        <FcSearch cursor={"pointer"} fontSize={"30px"} />
      </Box>
      <TableContainer
        minH={"70vh"}
        overflowY={"auto"}
        m="50px auto"
        w={{ md: "80%" }}
      >
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>CNPJ</Th>
              <Th>Razão Social</Th>
              <Th isNumeric>Detalhes</Th>
            </Tr>
          </Thead>
          {data && data
          .filter((item) => item.empresa.cnpj.includes(search))
          .map((item) => (
            <CardList key={item.id} empresa={item} dados={dados} />
          ))}
          <Tfoot>
            <Tr>
              <Th>Numero de empresas Cadastradas</Th>
              <Th>Total</Th>
              <Th isNumeric>{data && data.length} empresas</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default RelatoriosPage;
7;

import { Container, Flex, Heading } from "@chakra-ui/layout";
import RegistroEmpresarial from "../../components/RegistroEmpresa";

const Relatorios = () => {

    return (
        <>
            <Heading bg={"indexa.500"} p="6" color={"white.500"} textAlign={"center"}>Registro de consultas a empresas</Heading>

            <Container>
                <Flex gap={10}>
                    <RegistroEmpresarial />

                </Flex>
            </Container>
        </>
    );
};

export default Relatorios;
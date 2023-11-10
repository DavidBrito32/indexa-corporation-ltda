import { Container, Flex, Heading } from "@chakra-ui/layout";
import RegistroEmpresarial from "../../components/RegistroEmpresa";

const Relatorios = () => {

    return (
        <>
            <Heading bg={"indexa.500"} p="6" color={"white.500"} textAlign={"center"}>Registro de consultas a empresas</Heading>

            <Container w="full" maxW={{base: "100vw", md: "50vw"}} minH={{base: "100vh",md: "80vh"}}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Flex  w="full" gap={10} flexDirection={"column"}>
                    <RegistroEmpresarial />
                </Flex>
            </Container>
        </>
    );
};

export default Relatorios;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { ImPencil, ImCheckmark } from "react-icons/im";
import { Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import logo from "./assets/logo.png";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const CardEmpresas = ({ empresa }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    form: newDados,
    handleForm,
    clearForm,
  } = useForm({
    status: "",
    detalhes_da_operacao: "",
  });

  const [obs, setObs] = useState(false);
  const editaInfos = () => {
    setObs(!obs)
    if(obs){
      onOpen();
      setObs(!obs)
    }

    };
  return (
    <>
      <Container
        w={"full"}
        rounded={"8px"}
        display={"flex"}
        flexDirection={"column"}
        p="5"
        border={"2px"}
        shadow="1px 5px 30px rgba(0,0,0)"
        borderColor={"gray.300"}
        m={"20px 0"}
      >
        <Flex w="full" h={"100px"}>
          <Image
            w={"150px"}
            objectFit={"contain"}
            src={logo}
            alt="LOGO indexa"
          />
          <Box flex={"1"} position={"relative"}>
            <Heading
              fontSize={{ base: "16px", md: "18px" }}
              textAlign={"center"}
            >
              Observações
            </Heading>
            <Text
              display={!obs ? "block" : "none"}
              pl="2"
              textAlign={"center"}
              h={"60px"}
              overflowY={"auto"}
            >
              {empresa.detalhes_da_operacao}
            </Text>
            <Box
              mt="5px"
              _hover={{ color: "red", fontSize: "22px" }}
              transition={"100ms"}
              fontSize="18px"
              position={"absolute"}
              right={"5"}
              bottom={"5px"}
            >
              {!obs ? (
                <ImPencil onClick={editaInfos} cursor={"pointer"} />
              ) : (
                <ImCheckmark onClick={editaInfos} cursor={"pointer"} />
              )}
            </Box>
            <Input
              display={obs ? "block" : "none"}
              name="detalhes_da_operacao"
              type="text"
              value={newDados.detalhes_da_operacao}
              placeholder="Atualize as informações do cadastro"
              onChange={handleForm}
              border={"2px"}
              borderColor={"green"}
            />
          </Box>
        </Flex>
        <Flex border={"2px"} w="full">
          <Box
            w="full"
            p="0 10px"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text>Razão Social:</Text>
              <Text fontWeight={"bold"}>{empresa.razao_social}</Text>
              <Text>CNPJ: {empresa.cnpj}</Text>
              <Text>Consultor:</Text>
              <Text fontWeight={"bold"} color={"red.300"} fontStyle={"italic"}>{empresa.consultor}</Text>
              <Text>Banco:</Text>
              <Text fontWeight={"bold"}>{empresa.banco}</Text>
              <Text>Gerente:</Text>
              <Text fontWeight={"bold"}>{empresa.gerente}</Text>
            </Box>
            <Box>
              <Text>Valor: R$: 22.000.000 </Text>
              {empresa.status !== "" && (
                <Text>
                  Status:{empresa.status}
                </Text>
              )}
              {
                obs && (
                <Select>
                  <option>Cadastro</option>
                  <option>Em Trâmite</option>
                  <option>Calculo de Limite</option>
                  <option>Assinatura de conta</option>
                  <option>Finalizado</option>
                </Select>
                )
              }
            </Box>
          </Box>
        </Flex>
      </Container>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg={"#00000099"} />
        <ModalContent bg={"#FFFFFF"} >
          <ModalHeader>Você realmente deseja atualizar todas as informações?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Esta ação é irrevercivel
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => {
                onClose()
            }}>
              Sim
            </Button>
            <Button variant='ghost' onClick={() => {
                onClose()
            }}>Não</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardEmpresas;

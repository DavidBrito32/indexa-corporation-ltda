/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import brasil from "./assets/brasao.png";
import { FcOpenedFolder } from "react-icons/fc";
import CardEmpresas from "../CardEmpresas";

const CardList = ({ empresa }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Container>
        <Flex
          w={{ base: "100%", md: "400px" }}
          shadow={"-5px 0px 30px #000000"}
          gap={"20px"}
          h="110px"
          bg={"green.100"}
        >
          <Image
            src={brasil}
            objectFit={"contain"}
            w={{ base: "20%" }}
            alt="Brasao_do_Brasil"
          />
          <Box flex={1} p="2" position={"relative"}>
            <Heading
              textAlign={"center"}
              fontSize={{ base: ".9rem", md: "1rem" }}
            >
              {empresa && empresa.razao_social}
            </Heading>
            <Text
              fontSize={{ base: ".8rem", md: "1rem" }}
              fontWeight={"bold"}
              color={"red.500"}
            >
              CNPJ: {empresa && empresa.cnpj}
            </Text>
            <Text
              fontSize={{ base: ".9rem", md: "1rem" }}
              w={"full"}
              overflow={"hidden"}
              fontWeight={"bold"}
            >
              Consultor: {empresa && empresa.consultor}
            </Text>
            <Text color={"yellow.600"}>Status: {empresa && empresa.status}</Text>
            <Box
              transition={"all ease-in 200ms"}
              _active={{ transform: "scale(.97)" }}
              position={"absolute"}
              fontSize={{ base: "1.5rem", md: "1.9rem" }}
              _hover={{
                fontSize: { base: "1.8rem", md: "2.3rem" },
                transform: "rotate(15deg)",
              }}
              top={{ base: "0px", md: "10px" }}
              right={{ base: "0", md: "10px" }}
            >
              <FcOpenedFolder onClick={onOpen} title="Ver detalhes" cursor={"pointer"} />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Modal
        // isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInRight'
        bg="#00000085"
        size="xl"
      >
        <ModalOverlay w="full" />
        <ModalContent  bg="#FFFFFF">
          <ModalHeader textAlign={"center"} w="full">Detalhes da empresa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardEmpresas empresa={empresa} />
          </ModalBody>
          <ModalFooter w="full">
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardList;

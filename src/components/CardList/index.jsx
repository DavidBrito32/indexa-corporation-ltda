/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FcFile } from "react-icons/fc";

const CardList = ({ empresa, dados }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: editar,
    onOpen: editarOpen,
    onClose: editarFechar,
  } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Tbody bg={"indexa.500"} color={"white"} fontWeight={"bold"}>
        <Tr>
          <Td>{empresa["empresa"]["cnpj"]}</Td>
          <Td>{empresa["empresa"]["razao_social"]}</Td>
          <Td isNumeric>
            <Button
              _hover={{ bg: "green.500" }}
              bg={"transparent"}
              onClick={onOpen}
            >
              <FcFile fontSize={"24px"} />
            </Button>
          </Td>
        </Tr>
      </Tbody>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.300">
          <ModalHeader textAlign={"center"} textTransform={"capitalize"}>
            {empresa["empresa"]["razao_social"]}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH={"50vh"} overflowY={"auto"}>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Flex justifyContent={"space-between"}>
                <Text color={"red.500"} fontWeight={"bold"}>
                  CNPJ:{" "}
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.empresa.cnpj}
                  </Text>
                </Text>
                <Text color={"red.500"} fontWeight={"bold"}>
                  Regime Tributario:{" "}
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.empresa.regime_tributario}
                  </Text>
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text color={"red.500"} fontWeight={"bold"}>
                  Gestor:{" "}
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.administrador.nome_completo}
                  </Text>
                </Text>
                <Text color={"red.500"} fontWeight={"bold"}>
                  CPF:{" "}
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.administrador.cpf}
                  </Text>
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text color={"red.500"} fontWeight={"bold"}>
                  Telefone:{" "}
                  <Text
                    fontStyle={"italic"}
                    fontWeight={"normal"}
                    color={"blue.500"}
                  >
                    {empresa.administrador.telefone}
                  </Text>
                </Text>
                <Text color={"red.500"} fontWeight={"bold"}>
                  E-mail:{" "}
                  <Text
                    fontStyle={"italic"}
                    fontWeight={"normal"}
                    color={"blue.500"}
                  >
                    {empresa.administrador.email}
                  </Text>
                </Text>
              </Flex>

              <Text color={"red.500"} fontWeight={"bold"}>
                Consultor:{" "}
                <Text fontWeight={"normal"} color={"black"}>
                  {empresa.consultor}
                </Text>
              </Text>
              <Text color={"red.500"} fontWeight={"bold"}>
                Documentação PJ:{" "}
                <Text fontWeight={"normal"} color={"black"}></Text>
              </Text>
              <Text color={"red.500"} fontWeight={"bold"}>
                Documentação PF:{" "}
                <Text fontWeight={"normal"} color={"black"}></Text>
              </Text>
              <Text color={"red.500"} fontWeight={"bold"}>
                Banco Escolhido{" "}
                <Text fontWeight={"normal"} color={"black"}></Text>
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              _hover={{ bg: "yellow.600" }}
              color={"white.500"}
              bg="red.400"
              ref={btnRef}
              onClick={editarOpen}
            >
              Editar Informações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Drawer
        isOpen={editar}
        placement="right"
        onClose={editarFechar}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="white.500">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={editarFechar}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CardList;

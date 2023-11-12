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
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { FcFile } from "react-icons/fc";
import { useForm } from "../../hooks/useForm";
import { DadosEmpresasContext } from "../../context/DadosEmpresa";

const CardList = ({ empresa, dados }) => {
  const { dados: empresas, setDados } = useContext(DadosEmpresasContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { form, handleForm, clearForm } = useForm({
    status: "",
    descricao: "",
    imovel_empresa: {
      qdt: "",
      matriculas: "",
    },
    imovel_cpf: {
      qdt: "",
      matriculas: "",
    },
    veiculos_empresa: {
      qdt: "",
      crlv: "",
    },
    veiculos_cpf: {
      qdt: "",
      crlv: "",
    },
    faturamento: "",
  });

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
        <ModalContent maxW="35vw" bg="white.300">
          <ModalHeader
            bg="green.600"
            color={"white.500"}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            {empresa["empresa"]["razao_social"]}
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody maxW="80vw" maxH={"50vh"} overflowY={"auto"}>
            <Heading
              color={"purple.500"}
              m="10px auto"
              textAlign={"center"}
              fontSize={22}
            >
              Informações Basicas
            </Heading>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Flex justifyContent={"space-between"}>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>CNPJ: </Text>
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.empresa.cnpj}
                  </Text>
                </Box>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>Regime Tributario: </Text>
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.empresa.regime_tributario}
                  </Text>
                </Box>
              </Flex>

              <Box>
                <Text color={"purple.500"} fontWeight={"Bold"}>
                  Endereço da empresa:
                </Text>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Avenida:{" "}
                  </Text>
                  <Text>{empresa.empresa.endereco.logradouro}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Numero:{" "}
                  </Text>
                  <Text>{empresa.empresa.endereco.numero}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Bairro:{" "}
                  </Text>
                  <Text>{empresa.empresa.endereco.bairro}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    CEP:{" "}
                  </Text>
                  <Text>{empresa.empresa.endereco.cep}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Cidade:{" "}
                  </Text>
                  <Text>{empresa.empresa.endereco.cidade}</Text>
                </Flex>
              </Box>

              <Flex justifyContent={"space-between"}>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>Gestor: </Text>
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.administrador.nome_completo}
                  </Text>
                </Box>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>CPF: </Text>
                  <Text fontWeight={"normal"} color={"black"}>
                    {empresa.administrador.cpf}
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>Telefone: </Text>
                  <Text
                    fontStyle={"italic"}
                    fontWeight={"normal"}
                    color={"blue.500"}
                  >
                    {empresa.administrador.telefone}
                  </Text>
                </Box>
                <Box color={"red.500"} fontWeight={"bold"}>
                  <Text>E-mail: </Text>
                  <Text
                    fontStyle={"italic"}
                    fontWeight={"normal"}
                    color={"blue.500"}
                  >
                    {empresa.administrador.email}
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Text color={"purple.500"} fontWeight={"Bold"}>
                  Endereço do Administrador:
                </Text>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Avenida:{" "}
                  </Text>
                  <Text>{empresa.administrador.endereco.logradouro}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Numero:{" "}
                  </Text>
                  <Text>{empresa.administrador.endereco.numero}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Bairro:{" "}
                  </Text>
                  <Text>{empresa.administrador.endereco.bairro}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    CEP:{" "}
                  </Text>
                  <Text>{empresa.administrador.endereco.cep}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"} fontWeight={"Bold"}>
                    Cidade:{" "}
                  </Text>
                  <Text>{empresa.administrador.endereco.cidade}</Text>
                </Flex>
              </Box>

              <Text color={"red.500"} fontWeight={"bold"}>
                Consultor:{" "}
                <Text fontWeight={"normal"} color={"black"}>
                  {empresa.consultor}
                </Text>
              </Text>
              <hr />
              <Heading
                color={"purple.500"}
                m="10px auto"
                textAlign={"center"}
                fontSize={22}
              >
                Documentação PJ
              </Heading>
              <Text color={"red.500"} fontWeight={"bold"}>
                <Flex gap={50}>
                  <Text fontWeight={"normal"} color={"black"}>
                    CCMEI:{" "}
                  </Text>
                  <Text
                    fontWeight={"normal"}
                    color={
                      empresa.empresa.documentacao_pj.ccmei
                        ? "blue.500"
                        : "red.500"
                    }
                  >
                    {empresa.empresa.documentacao_pj.ccmei
                      ? "Entregue"
                      : "Não Entregue"}
                  </Text>
                </Flex>
                <Flex gap={50}>
                  <Text fontWeight={"normal"} color={"black"}>
                    Contrato Social:{" "}
                  </Text>
                  <Text
                    fontWeight={"normal"}
                    color={
                      empresa.empresa.documentacao_pj.contrato_social
                        ? "blue.500"
                        : "red.500"
                    }
                  >
                    {empresa.empresa.documentacao_pj.contrato_social
                      ? "Entregue"
                      : "Não Entregue"}
                  </Text>
                </Flex>
                <Flex gap={50}>
                  <Text fontWeight={"normal"} color={"black"}>
                    Alvará de Funcionamento:{" "}
                  </Text>
                  <Text
                    fontWeight={"normal"}
                    color={
                      empresa.empresa.documentacao_pj.alvara_de_funcionamento
                        ? "blue.500"
                        : "red.500"
                    }
                  >
                    {empresa.empresa.documentacao_pj.alvara_de_funcionamento
                      ? "Entregue"
                      : "Não Entregue"}
                  </Text>
                </Flex>
                <Text fontSize={18} color={"green.500"}>
                  Veiculos:
                </Text>
                <Flex flexDirection={"column"}>
                  <Text fontWeight={"normal"} color={"black"}>
                    CRLV:
                  </Text>
                  <Flex gap={10}>
                    <Text color={"black"}> Quantidade:</Text>
                    <Text>
                      {empresa.empresa.documentacao_pj.crlv_digital.qtd}
                    </Text>
                  </Flex>
                  <Flex gap={10}>
                    <Text color={"black"}> Veiculos:</Text>
                    <Text>
                      {empresa.empresa.documentacao_pj.crlv_digital.veiculos}
                    </Text>
                  </Flex>
                </Flex>
                <Text fontSize={18} color={"green.500"}>
                  Imoveis:
                </Text>
                <Flex flexDirection={"column"}>
                  <Text fontWeight={"normal"} color={"black"}>
                    Matriculas:
                  </Text>
                  <Flex gap={10}>
                    <Text color={"black"}> Quantidade:</Text>
                    <Text>
                      {empresa.empresa.documentacao_pj.matriculas.qdt}
                    </Text>
                  </Flex>
                  <Flex gap={10}>
                    <Text color={"black"}> Inscrições:</Text>
                    <Text>
                      {empresa.empresa.documentacao_pj.matriculas.inscricoes}
                    </Text>
                  </Flex>
                </Flex>
              </Text>
              <hr />

              <Heading
                color={"purple.500"}
                m="10px auto"
                textAlign={"center"}
                fontSize={22}
              >
                Documentação PF
              </Heading>
              <Box color={"red.500"} fontWeight={"bold"}>
                <Flex gap={10}>
                  <Text color={"black"}>Casado?</Text>
                  <Text>
                    {empresa.administrador.documentacao_pf.casado
                      ? "Sim"
                      : "Não"}
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"}>Entregou o RG, CPF ou CNH?</Text>
                  <Text>
                    {empresa.administrador.documentacao_pf.rg_cpf_cnh
                      ? "Sim"
                      : "Não"}
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Text color={"black"}>Entregou o imposto de renda?</Text>
                  <Text>
                    {empresa.administrador.documentacao_pf.imposto_de_renda
                      ? "Sim"
                      : "Não"}
                  </Text>
                </Flex>
              </Box>

              <hr />
              <Heading
                color={"purple.500"}
                m="10px auto"
                textAlign={"center"}
                fontSize={22}
              >
                Trâmite Bancario
              </Heading>

              <Flex gap={10}>
                <Text fontWeight={"bold"}>Instituição: </Text>
                <Text color={"red.500"}>{empresa.banco.instituicao}</Text>
              </Flex>
              <Flex gap={10}>
                <Text fontWeight={"bold"}>Gerente Responsavel: </Text>
                <Text color={"blue.500"}>{empresa.banco.gerente}</Text>
              </Flex>
              <Flex gap={10}>
                <Text fontWeight={"bold"}>Faturamento Enviado: </Text>
                <Text color={"green.500"}>
                  R$: {empresa.banco.faturamento_enviado}
                </Text>
              </Flex>
              <Flex flexDirection={"column"} m="20px 0  ">
                <Text fontWeight={"bold"} textAlign={"Center"}>
                  Descrição da Operação:{" "}
                </Text>
                <Text color={"green.500"} textAlign={"justify"}>
                  {empresa.banco.detalhes_da_operacao}
                </Text>
              </Flex>
              <Flex flexDirection={"column"} m="20px 0  ">
                <Text fontWeight={"bold"} textAlign={"Center"}>
                  Status do Trâmite:{" "}
                </Text>
                <Text
                  p="2"
                  bg="gray.500"
                  color={"white.500"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  rounded="8px"
                >
                  {empresa.banco.status === ""
                    ? "Não Preenchido"
                    : empresa.banco.status}
                </Text>
              </Flex>
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
        minH={"100vh"}
        overflowY="scroll"
      >
        <DrawerOverlay />
        <DrawerContent  bg="white.500">
          <DrawerCloseButton />
          <DrawerHeader>Editar Informações</DrawerHeader>

          <DrawerBody >
            <Text
              p="2"
              rouded="8px"
              bg="teal.400"
              color="white.500"
              fontWeight={"bold"}
            >
              {empresa.empresa.razao_social}
            </Text>

            <Box>
              <Text>Status da operação:</Text>
              <Select
                name="status"
                value={form.status}
                onChange={handleForm}
                bg="blue.300"
                color={"white.500"}
                fontWeight={"bold"}
                placeholder="Defina o Status da Operação"
              >
                <option value="Cadastro Inicial INDEXA">
                  Cadastro Inicial INDEXA
                </option>
                <option value="Envio de Documentos ao Banco">
                  Envio de Documentos ao Banco
                </option>
                <option value="Cadastramento Bancario">
                  Cadastro no Banco
                </option>
                <option value="Visita Gerencial">Visita Gerencial</option>
                <option value="Calculo de Limites">Calculo de Limites</option>
                <option value="Assinatura de Contrato">
                  Assinatura de Contrato
                </option>
                <option value="Liberação de Recursos">
                  Assinatura de Contrato
                </option>
                <option value="Finalizado">Finalizado</option>
              </Select>
              <Text>Descrição da operação: </Text>
              <Textarea
                name="descricao"
                value={form.descricao}
                onChange={handleForm}
                placeholder="Alterar ou definir a descrição"
              ></Textarea>
            </Box>

            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Edição ou cadastro de imoveis:{" "}
            </Text>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Empresa{" "}
            </Text>
            <Flex flexDirection={"column"}>
              <Text p="2" bg="gray.100">
                Quantidade:{" "}
              </Text>
              <Input
                name="imovel_empresa.qdt"
                value={form.imovel_empresa.qdt}
                onChange={handleForm}
                placeholder="Informe quantos Imoveis o cliente possui"
              />
              <Text p="2" bg="gray.100">
                Matriculas:{" "}
              </Text>
              <Input
                name="imovel_empresa.matriculas"
                value={form.imovel_empresa.matriculas}
                onChange={handleForm}
                placeholder="Informe as matriculas"
              />
            </Flex>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Edição ou cadastro de imoveis:{" "}
            </Text>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              CPF:{" "}
            </Text>
            <Flex flexDirection={"column"}>
              <Text p="2" bg="gray.100">
                Quantidade:{" "}
              </Text>
              <Input
                name="imovel_cpf.qdt"
                value={form.imovel_cpf.qdt}
                onChange={handleForm}
                placeholder="Informe quantos Imoveis o cliente possui"
              />
              <Text p="2" bg="gray.100">
                Matriculas:{" "}
              </Text>
              <Input
                name="imovel_cpf.matriculas"
                value={form.imovel_cpf.matriculas}
                onChange={handleForm}
                placeholder="Informe as matriculas"
              />
            </Flex>

            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Edição ou cadastro de veiculos:{" "}
            </Text>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Empresa{" "}
            </Text>
            <Flex flexDirection={"column"}>
              <Text p="2" bg="gray.100">
                Quantidade:{" "}
              </Text>
              <Input
                name="veiculos_empresa.qdt"
                value={form.veiculos_empresa.qdt}
                onChange={handleForm}
                placeholder="Informe quantos Imoveis o cliente possui"
              />
              <Text p="2" bg="gray.100">
                CRLV Digital:{" "}
              </Text>
              <Input
                name="veiculos_empresa.crlv"
                value={form.veiculos_empresa.crlv}
                onChange={handleForm}
                placeholder="Informe os CRLV"
              />
            </Flex>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Edição ou cadastro de veiculos:{" "}
            </Text>
            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              CPF{" "}
            </Text>
            <Flex flexDirection={"column"}>
              <Text p="2" bg="gray.100">
                Quantidade:{" "}
              </Text>
              <Input
                name="veiculos_cpf.qdt"
                value={form.veiculos_cpf.qdt}
                onChange={handleForm}
                placeholder="Informe quantos Imoveis o cliente possui"
              />
              <Text p="2" bg="gray.100">
                CRLV Digital:{" "}
              </Text>
              <Input
                name="veiculos_cpf.crlv"
                value={form.veiculos_cpf.crlv}
                onChange={handleForm}
                placeholder="Informe os CRLV"
              />
            </Flex>

            <Text p={"3"} m="20px 0" bg="teal.500" color={"white"}>
              Atualização de Faturamento{" "}
            </Text>
            <Flex mb="50px" flexDirection={"column"}>
              <Text p="2" bg="gray.100">
                Faturamento Ultimos 12 meses
              </Text>
              <Input
                name="faturamento"
                onChange={handleForm}
                value={form.faturamento}
                placeholder="Informe o novo Faturamento"
              />
            </Flex>
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

"use client";

import { useState, useContext } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { DadosEmpresasContext } from "../../context/DadosEmpresa";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

const Form1 = () => {
  const { form, handleForm, handleCheckbox } = useContext(DadosEmpresasContext);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Registro de Empresa
      </Heading>
      <Flex w="full">
        <FormControl mr="5%">
          <FormLabel htmlFor="razao_social" fontWeight={"normal"}>
            Razão Social{" "}
            <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
              *
            </Text>
          </FormLabel>
          <Input
            id="razao_social"
            name="empresa.razao_social"
            value={form.empresa.razao_social}
            onChange={handleForm}
            placeholder="Razão Social"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="regime_tributario" fontWeight={"normal"}>
            Regime Tributário{" "}
            <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
              *
            </Text>
          </FormLabel>
          <Input
            id="regime_tributario"
            name="empresa.regime_tributario"
            value={form["empresa"]["regime_tributario"]}
            onChange={handleForm}
            placeholder="Regime tributario"
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="cnpj" fontWeight={"normal"}>
          Numero do CNPJ{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="cnpj"
          maxLength="18"
          name="empresa.cnpj"
          value={form.empresa.cnpj}
          onChange={handleForm}
          type="text"
          placeholder="EX: 00.000.000/0000-00"
        />
        <FormHelperText>
          Por favor, preencher o cnpj com o formato:{" "}
          <strong>00.000.000/0000-00</strong>
        </FormHelperText>
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="cnpj" fontWeight={"normal"}>
          Endereço:{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="Avenida"
          name="empresa.endereco.logradouro"
          value={form.empresa.endereco.logradouro}
          onChange={handleForm}
          type="text"
          width={"40%"}
          placeholder="Avenida:"
        />
        <Input
          id="cnpj"
          name="empresa.endereco.bairro"
          value={form.empresa.endereco.bairro}
          onChange={handleForm}
          type="text"
          width={"40%"}
          placeholder="Bairro:"
        />
        <Input
          id="cnpj"
          name="empresa.endereco.numero"
          value={form.empresa.endereco.numero}
          onChange={handleForm}
          type="text"
          width={"20%"}
          placeholder="Numero:"
        />
        <Input
          id="cep"
          name="empresa.endereco.cep"
          value={form.empresa.endereco.cep}
          onChange={handleForm}
          type="text"
          width={"50%"}
          placeholder="CEP: 00000-000"
        />
        <Input
          id="cidade"
          name="empresa.endereco.cidade"
          value={form.empresa.endereco.cidade}
          onChange={handleForm}
          type="text"
          width={"50%"}
          placeholder="Cidade:"
        />
        <FormHelperText>
          Por favor, preencher o cnpj com o formato:{" "}
          <strong>00.000.000/0000-00</strong>
        </FormHelperText>
      </FormControl>
      <FormControl flex mt="2%">
        <FormLabel
          htmlFor="documentacao_pj"
          bg="green.300"
          p="2"
          rounded="8px"
          color={"white.800"}
          fontWeight={"bold"}
        >
          Documentos recebidos?{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Stack spacing={2} direction="column">
          <Checkbox
            name="empresa.documentacao_pj.ccmei"
            value={form.empresa.documentacao_pj.ccmei}
            onChange={handleCheckbox}
            colorScheme="red"
          >
            CCMEI
          </Checkbox>
          <Checkbox
            name="empresa.documentacao_pj.contrato_social"
            value={form.empresa.documentacao_pj.contrato_social}
            onChange={handleCheckbox}
            colorScheme="green"
          >
            Contrato Social
          </Checkbox>
          <Checkbox
            colorScheme="green"
            name="empresa.documentacao_pj.alvara_de_funcionamento"
            value={form.empresa.documentacao_pj.alvara_de_funcionamento}
            onChange={handleCheckbox}
          >
            Alvará de funcionamento
          </Checkbox>
        </Stack>
        <Input
          w={"50%"}
          placeholder="Possui quantos Aditivos? (Se sim informar a quantidade)"
          name="empresa.documentacao_pj.aditivos"
          value={form.empresa.documentacao_pj.aditivos}
          onChange={handleForm}
        />
        <Input
          w={"45%"}
          placeholder="Informe o Faturamento dos Ultimos 12 meses"
        />
        <Text p="2" rounded="8px" bg="blue.100">
          Possui Matriculas de imoveis?
        </Text>
        <Input
          placeholder="Quantidade ex: 2"
          w="20%"
          name="empresa.documentacao_pj.matriculas.qdt"
          value={form.empresa.documentacao_pj.matriculas.qdt}
          onChange={handleForm}
        />
        <Input
          placeholder="Informe as Matriculas: Ex 0001, 0002, 003"
          name="empresa.documentacao_pj.matriculas.inscricoes"
          value={form.empresa.documentacao_pj.matriculas.inscricoes}
          onChange={handleForm}
          w="80%"
        />
        <Text p="2" rounded="8px" bg="blue.100">
          Possui CRLV de veiculos?
        </Text>
        <Input
          placeholder="Quantidade ex: 2"
          w="20%"
          name="empresa.documentacao_pj.crlv_digital.qtd"
          value={form.empresa.documentacao_pj.crlv_digital.qtd}
          onChange={handleForm}
        />
        <Input
          placeholder="Informe os veiculos: Ex Carro 1, Carro 2, Moto 1"
          w="80%"
          name="empresa.documentacao_pj.crlv_digital.veiculos"
          value={form.empresa.documentacao_pj.crlv_digital.veiculos}
          onChange={handleForm}
        />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel
          htmlFor="empresa.certidoes_PJ"
          bg="red.300"
          p="2"
          rounded="8px"
          color={"white.500"}
          fontWeight={"normal"}
        >
          Saiu todas as certidões?{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="email"
          type="text"
          placeholder="Ex: Receita, Sefaz, Sefin ..."
          name="empresa.certidoes_PJ"
          value={form.empresa.certidoes_PJ}
          onChange={handleForm}
        />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel
          htmlFor="consultor"
          bg="blue.300"
          p="2"
          rounded="8px"
          color={"white.500"}
          fontWeight={"normal"}
        >
          Possui consultor especifico?{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="email"
          name="consultor"
          value={form.consultor}
          onChange={handleForm}
          type="text"
          placeholder="Nome do Consultor"
        />
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const { form, handleForm, handleCheckbox } = useContext(DadosEmpresasContext);
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize={"22px"}
        fontWeight="normal"
        mb="2%"
      >
        Administrador da empresa
      </Heading>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="administrador"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Informe o nome completo do administrador{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          type="text"
          id="administrador"
          placeholder={"Nome completo do administrador da empresa"}
          name="administrador.nome_completo"
          value={form.administrador.nome_completo}
          onChange={handleForm}
          autoComplete="Name"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="cpf"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Informe o CPF do administrador{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          type="text"
          placeholder="Ex: 000.000.000-22"
          pattern="/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/"
          required
          name="administrador.cpf"
          value={form.administrador.cpf}
          onChange={handleForm}
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="telefone"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Telefone do Administrador{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          type="tel"
          placeholder="(XX) X XXXX-XXXX"
          name="administrador.telefone"
          value={form.administrador.telefone}
          onChange={handleForm}
          id="telefone"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="email"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          E-mail{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          type="email"
          _placeholder={"Digite o E-mail do Administrador"}
          name="administrador.email"
          value={form.administrador.email}
          onChange={handleForm}
          id="email"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="cnpj" fontWeight={"normal"}>
          Endereço:{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="Avenida"
          name="administrador.endereco.logradouro"
          value={form.administrador.endereco.logradouro}
          onChange={handleForm}
          type="text"
          width={"40%"}
          placeholder="Avenida:"
        />
        <Input
          id="cnpj"
          name="administrador.endereco.bairro"
          value={form.administrador.endereco.bairro}
          onChange={handleForm}
          type="text"
          width={"40%"}
          placeholder="Bairro:"
        />
        <Input
          id="cnpj"
          name="administrador.endereco.numero"
          value={form.administrador.endereco.numero}
          onChange={handleForm}
          type="text"
          width={"20%"}
          placeholder="Numero:"
        />
        <Input
          id="cep"
          name="administrador.endereco.cep"
          value={form.administrador.endereco.cep}
          onChange={handleForm}
          type="text"
          width={"50%"}
          placeholder="CEP: 00000-000"
        />
        <Input
          id="cidade"
          name="administrador.endereco.cidade"
          value={form.administrador.endereco.cidade}
          onChange={handleForm}
          type="text"
          width={"50%"}
          placeholder="Cidade:"
        />
        <FormHelperText>
          Por favor, preencher o cnpj com o formato:{" "}
          <strong>00.000.000/0000-00</strong>
        </FormHelperText>
      </FormControl>

      <FormControl flex mt="2%">
        <FormLabel
          htmlFor="documentacao_pf"
          bg="green.300"
          p="2"
          rounded="8px"
          color={"white.800"}
          fontWeight={"bold"}
        >
          Documentos recebidos?{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Stack spacing={2} direction="column">
          <Checkbox
            name="administrador.documentacao_pf.rg_cpf_cnh"
            value={form.administrador.documentacao_pf.rg_cpf_cnh}
            onChange={handleCheckbox}
            colorScheme="red"
          >
            RG, CPF ou CNH
          </Checkbox>
          <Checkbox
            name="administrador.documentacao_pf.casado"
            value={form.administrador.documentacao_pf.casado}
            onChange={handleCheckbox}
            colorScheme="green"
          >
            Casado(a)?
          </Checkbox>
          <Checkbox
            colorScheme="green"
            name="administrador.documentacao_pf.imposto_de_renda"
            value={form.administrador.documentacao_pf.imposto_de_renda}
            onChange={handleCheckbox}
          >
            Imposto de renda Ultimos 2 exercicios
          </Checkbox>
        </Stack>
        <Text p="2" rounded="8px" bg="blue.100">
          Possui Matriculas de imoveis?
        </Text>
        <Input
          placeholder="Quantidade ex: 2"
          w="20%"
          name="administrador.documentacao_pf.matriculas.qdt"
          value={form.administrador.documentacao_pf.matriculas.qdt}
          onChange={handleForm}
        />
        <Input
          placeholder="Informe as Matriculas: Ex 0001, 0002, 003"
          name="administrador.documentacao_pf.matriculas.inscricoes"
          value={form.administrador.documentacao_pf.matriculas.inscricoes}
          onChange={handleForm}
          w="80%"
        />
        <Text p="2" rounded="8px" bg="blue.100">
          Possui CRLV de veiculos?
        </Text>
        <Input
          placeholder="Quantidade ex: 2"
          w="20%"
          name="administrador.documentacao_pf.crlv_digital.qtd"
          value={form.administrador.documentacao_pf.crlv_digital.qtd}
          onChange={handleForm}
        />
        <Input
          placeholder="Informe os veiculos: Ex Carro 1, Carro 2, Moto 1"
          w="80%"
          name="administrador.documentacao_pf.crlv_digital.veiculos"
          value={form.administrador.documentacao_pf.crlv_digital.veiculos}
          onChange={handleForm}
        />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel
          htmlFor="empresa.certidoes_PJ"
          bg="red.300"
          p="2"
          rounded="8px"
          color={"white.500"}
          fontWeight={"normal"}
        >
          Saiu todas as certidões?{" "}
          <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
            *
          </Text>
        </FormLabel>
        <Input
          id="email"
          type="text"
          placeholder="Ex: Receita, Sefaz, Sefin ..."
          name="administrador.certidoes_PF"
          value={form.administrador.certidoes_PF}
          onChange={handleForm}
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const { form, handleForm } = useContext(DadosEmpresasContext);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Processo Bancario
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Trâmite
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              Instituição{" "}
              <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
                *
              </Text>
            </InputLeftAddon>
            <Input
              type="text"
              name="banco.instituicao"
              value={form.banco.instituicao}
              onChange={handleForm}
              placeholder="Em qual banco esta sendo feito o trabalho?"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Gerente Responsavel:
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              Gerente:{" "}
              <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
                *
              </Text>
            </InputLeftAddon>
            <Input
              type="text"
              name="banco.gerente"
              value={form.banco.gerente}
              onChange={handleForm}
              placeholder="Qual Gerente responsavel pela operação"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Valor do Faturamento:
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              Faturamento Anual:{" "}
              <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
                *
              </Text>
            </InputLeftAddon>
            <Input
              type="text"
              name="banco.faturamento_enviado"
              value={form.banco.faturamento_enviado}
              onChange={handleForm}
              placeholder="ex: R$: 1.000.000,00"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Detalhes da operação
          </FormLabel>
          <Textarea
            placeholder="Detalhes"
            name="banco.detalhes_da_operacao"
            value={form.banco.detalhes_da_operacao}
            onChange={handleForm}
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Descreva detalhes relevantes desta operação{" "}
            <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
              *
            </Text>
          </FormHelperText>
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            data de cadastro{" "}
            <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>
              *
            </Text>
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              color="gray.500"
              rounded="md"
            >
              Data de Cadastro
            </InputLeftAddon>
            <Input
              type="text"
              name="data_do_cadastro"
              value={form.data_do_cadastro}
              onChange={handleForm}
              placeholder="Ex: 00/00/2023"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const RegistroEmpresarial = () => {
  const { form, dados, setDados, clearForm } = useContext(DadosEmpresasContext);

  const enviaData = async () => {
    try{
      await axios.post(BASE_URL, form).then(()=>{
        console.log("Dados Enviados Com Sucesso");
      })
    }catch {((e) => {
      console.log(e.message);
  })
  }
  } 

  const cadastrar = () => {
    if (
      form.empresa.cnpj !== "" &&
      form.empresa.razao_social !== "" &&
      form.administrador.cpf !== "" && 
      form.consultor !== ""
    ) {
      setDados([...dados, form]);
      enviaData();


      clearForm();
      console.log(dados);
      toast({
        title: "Empresa Registrada com Sucesso",
        description: "Cadastramos o status da empresa com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Por favor Preencha Todos os Campos",
        description:
          "Todos os Campos Indicados com o * precisam ser preenchidos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        w="full"
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  cadastrar();
                }}
              >
                Salvar
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default RegistroEmpresarial;

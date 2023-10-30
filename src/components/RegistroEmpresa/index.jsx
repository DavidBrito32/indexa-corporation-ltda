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
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { DadosEmpresasContext } from "../../context/DadosEmpresa";

const Form1 = () => {
  const { form, handleForm } = useContext(DadosEmpresasContext);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Registro de Empresa
      </Heading>
      <Flex w="full">
        <FormControl mr="5%">
          <FormLabel htmlFor="razao_social" fontWeight={"normal"}>
            Razão Social <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
          </FormLabel>
          <Input
            id="razao_social"
            name="razao_social"
            value={form.razao_social}
            onChange={handleForm}
            placeholder="Razão Social"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            htmlFor="regime_tributario"
            fontWeight={"normal"}
          >
            Regime Tributário <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
          </FormLabel>
          <Input
            id="regime_tributario"
            name="regime_tributario"
            value={form.regime_tributario}
            onChange={handleForm}
            placeholder="Regime tributario"
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="cnpj" fontWeight={"normal"}>
          Numero do CNPJ <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input id="email" name="cnpj" value={form.cnpj} onChange={handleForm} type="text" placeholder="EX: 00.000.000/0000-00" />
        {/* <FormHelperText>Nunca Vamos Compartilhar suas informações</FormHelperText> */}
      </FormControl>
      <FormControl mt="2%">
        <FormLabel
          htmlFor="certidoes_PJ"
          bg="red.300"
          p="2"
          rounded="8px"
          color={"white.500"}
          fontWeight={"normal"}
        >
          Saiu todas as certidões? <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          id="email"
          type="text"
          placeholder="Ex: Receita, Sefaz, Sefin ..."
          name="certidoes_PJ"
          value={form.certidoes_PJ}
          onChange={handleForm}
        />
        {/* <FormHelperText>Nunca Vamos Compartilhar suas informações</FormHelperText> */}
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
          Possui consultor especifico? <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input id="email" name="consultor" value={form.consultor} onChange={handleForm} type="text" placeholder="Nome do Consultor" />
        {/* <FormHelperText>Nunca Vamos Compartilhar suas informações</FormHelperText> */}
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const { form, handleForm } = useContext(DadosEmpresasContext);
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
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="estado_adm"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Estado
        </FormLabel>
        <Select
          id="country"
          name="estado_adm"
          value={form.estado_adm}
          onChange={handleForm}
          autoComplete="estado_adm"
          placeholder="Selecione Seu Estado"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </Select>
      </FormControl>

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
          Informe o nome completo do administrador <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          type="text"
          name="administrador"
          id="administrador"
          value={form.administrador}
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
          Informe o CPF do administrador <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          type="text"
          placeholder="Ex: 000.000.000-22"
          pattern="/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/"
          required
          name="cpf"
          value={form.cpf}
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

      <FormControl mt="2%">
        <FormLabel
          htmlFor="certidoes_PF"
          bg="red.300"
          p="2"
          rounded="8px"
          color={"white.500"}
          fontWeight={"normal"}
        >
          Saiu todas as certidões? <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          id="certidoes_PF"
          type="text"
          name="certidoes_PF"
          value={form.certidoes_PF}
          onChange={handleForm}
          placeholder="Ex: Receita, Sefaz, Sefin ..."
        />
        {/* <FormHelperText>Nunca Vamos Compartilhar suas informações</FormHelperText> */}
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Telefone do Administrador <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          type="tel"
          placeholder="(XX) X XXXX-XXXX"
          name="telefone"
          value={form.telefone}
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
          E-mail <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
        </FormLabel>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleForm}
          id="email"
          autoComplete="email"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
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
              Instituição  <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
            </InputLeftAddon>
            <Input
              type="text"
              name="banco"
              value={form.banco}
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
              Gerente:   <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
            </InputLeftAddon>
            <Input
              type="text"
              name="gerente"
              value={form.gerente}
              onChange={handleForm}
              placeholder="Qual Gerente responsavel pela operação"
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
            name="detalhes_da_operacao"
            value={form.detalhes_da_operacao}
            onChange={handleForm}
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Descreva detalhes relevantes desta operação <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
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
            data de cadastro <Text display={"inline"} color={"red.500"} fontWeight={"bold"}>*</Text>
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
              type="datetime-local"
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

  const cadastrar = () => {
    if((form.cnpj !== "") && (form.razao_social !== "") && (form.cnpj !== "") && form.cpf !== ""){
      setDados([...dados, form]);
      clearForm();    
      console.log(dados);
      toast({
        title: "Empresa Registrada com Sucesso",
        description: "Cadastramos o status da empresa com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }else{
      toast({
        title: "Por favor Preencha Todos os Campos",
        description: "Todos os Campos Indicados com o * precisam ser preenchidos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
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

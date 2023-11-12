/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { PiCalendarCheckBold } from "react-icons/pi";

import RFB from "./assets/images.png";
import sefaz from "./assets/sefaz.png";
import pref from "./assets/prefeitura.png";
import trabalho from "./assets/trabalho.png";
import fgts from "./assets/fgts.png";
import pf from "./assets/pf.webp";
import gov from "./assets/gov.png";
import lupa from "./assets/lupa.avif";
import iss from "./assets/iss.jpg";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          as="a"
          variant={"link"}
          href={href}
          target="_blank"
          colorScheme={"blue"}
          size={"sm"}
        >
          Clique aqui
        </Button>
      </Stack>
    </Box>
  );
};

const Consultas = () => {
  return (
    <>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Deseja Verifficar se sua empresa esta apta a recursos? Veja quais
            certidões precisamos para dar sequencia
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Para qualquer tramite financeiro, a saude fiscal de uma empresa é
            essencial para poder ser contemplado com excelentes categorias de
            credito, Fiquem atentos a vida fiscal de vossas empresas
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" w="full" gridGap={4} justify="center">
            <Text
              bg="green.500"
              p="2"
              textAlign="center"
              color="white.500"
              fontWeight={"bold"}
              w="full"
              fontSize={"24px"}
              m={"20px 0px"}
            >
              Inscrições
            </Text>
            <Card
              heading={"Cartão CNPJ"}
              icon={<Avatar src={gov} w={20} h={20} />}
              description={"Ficha Cadastral CNPJ Atualizada"}
              href={
                "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp"
              }
            />
            <Card
              heading={"Obter Inscrição Estadual"}
              icon={<Avatar src={lupa} w={20} h={20} />}
              description={"Inscrição Estadual Sefaz"}
              href={
                "https://consultapublica.sefaz.ce.gov.br/sintegra/preparar-consultar"
              }
            />
            <Card
              heading={"Obter Inscrição Municipal"}
              icon={<Avatar src={iss} w={20} h={20} />}
              description={"Inscrição municipal de Fortaleza"}
              href={
                "https://issadmin.sefin.fortaleza.ce.gov.br/grpfor/pagesPublic/cartaoInscricao/emitirCartaoInscricao.seam"
              }
            />
            <Text
              m={"20px 0px"}
              bg="green.500"
              p="2"
              textAlign="center"
              color="white.500"
              fontWeight={"bold"}
              fontSize={"24px"}
              w="full"
            >
              Certidões
            </Text>
            <Card
              heading={"Receita Federal"}
              icon={<Avatar src={RFB} w={20} h={20} />}
              description={
                "Consulte seu CNPJ ou CPF AQUI (Etapas para a realização -> CPF ou CNPJ)"
              }
              href={
                "https://www.gov.br/pt-br/servicos/emitir-certidao-de-regularidade-fiscal"
              }
            />
            <Card
              heading={"Sefaz CE"}
              icon={<Avatar src={sefaz} w={20} h={20} />}
              description={
                "Regularidade Fiscal Estadual não pode faltar para nenhuma empresa"
              }
              href={
                "https://consultapublica.sefaz.ce.gov.br/certidaonegativa/preparar-consultar"
              }
            />
            <Card
              heading={"Prefeitura Municipal"}
              icon={<Avatar src={pref} w={20} h={20} />}
              description={
                "Regularidade fiscal municipal é importante, pois o tramite sempre é realizado na agencia do municipio ao qual sua empresa pertence"
              }
              href={
                "https://grpfor.sefin.fortaleza.ce.gov.br/grpfor/pagesPublic/certidoes/emitirCertidao.seam"
              }
            />
            <Card
              heading={"Debitos Trabalhistas"}
              icon={<Avatar src={trabalho} w={20} h={20} />}
              description={
                "Debitos trabalhistas são um dos principais causadores das recusas de credito"
              }
              href={
                "https://cndt-certidao.tst.jus.br/inicio.faces;jsessionid=j9GbCbNLAi1XRVzphvn0mdio60WSskVisntnK_TW.cndt-certidao-41-292bp"
              }
            />
            <Card
              heading={"FGTS Caixa Economica"}
              icon={<Avatar src={fgts} w={20} h={20} />}
              description={
                "Pagar o FGTS é uma obrigação de toda empresa, essa certidão é importante para que o tramite seja um sucesso"
              }
              href={
                "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
              }
            />
            <Card
              heading={"Antecedentes Criminais (CPF)"}
              icon={<Avatar src={pf} w={20} h={20} />}
              description={
                "Esta é uma consulta opcional, porem toda certidão é valida no tramite"
              }
              href={
                "https://antecedentes.dpf.gov.br/antecedentes-criminais/certidao"
              }
            />
          </Flex>
        </Container>
      </Box>
      <Box p={4} mt={"100px"}>
        <Heading textAlign={"center"}>Todas as certidões em mãos?</Heading>
        <Text fontSize={"24px"}>
          Quais Documentos são necessarios para o trâmite?
        </Text>
        <Box p={"4"} bg={"indexa.100"} rounded={"base"}>
          <Text fontSize={"24px"} textAlign={"center"} fontWeight={"700"}>
            Banco do Brasil
          </Text>
          <List
            spacing={3}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            fontSize={"24px"}
          >
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Cartão CNPJ
              <Link
                ml="20"
                as={"a"}
                href="https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp"
                target="_blank"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                Obter Aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Contrato social e todos os aditivos - Não possui todos? solicite a
              segunda via
              <Link
                ml="3"
                as={"a"}
                href="https://api.whatsapp.com/send?phone=+5585999433743&text=olá, Gostaria de solicitar a segunda via de meus aditivos / contrato social!"
                target="_blank"
                rounded="8"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                Aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Relação de Faturamento Gerencial
              <Link
                ml="20"
                as={"a"}
                href="https://www45.bb.com.br/fmc/frm/fw0711677_1.jsp"
                target="_blank"
                p="2"
                bg="indexa.500"
                rounded="8"
                color={"white.500"}
                fontWeight={"bold"}
              >
                Preencher aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Documentação Societaria:
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              RG, CPF ou CNH (se casado(a): Documentação do Conjuge)
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Caso possua bens Moveis e Imoveis Enviar CRLV Digital para
              veiculos, Matriculas e/ou escrituras de imoveis
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Se Casado(a): Certidão de casamento
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Comprovação de renda: Declaração de imposto de renda ultimos 2
              Exercicios
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Titulo Eleitoral junto com o nada consta no TSE
            </ListItem>
          </List>
        </Box>

        <Box mt={"30"} p={"4"} bg={"red.100"} rounded={"base"}>
          <Text fontSize={"24px"} textAlign={"center"} fontWeight={"700"}>
            Banco do Nordeste
          </Text>
          <List
            spacing={3}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            fontSize={"24px"}
          >
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Cartão CNPJ
              <Link
                ml="20"
                as={"a"}
                href="https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp"
                target="_blank"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                Obter Aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Contrato social e todos os aditivos - Não possui todos? solicite a
              segunda via
              <Link
                ml="3"
                as={"a"}
                href="https://api.whatsapp.com/send?phone=+5585999433743&text=olá, Gostaria de solicitar a segunda via de meus aditivos / contrato social!"
                target="_blank"
                rounded="8"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                Aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Ficha Cadastro Modelo BNB -
              <Link
                ml="3"
                as={"a"}
                href="https://drive.google.com/file/d/1Y9BXXdh9gInS87z4DW_z-oVQbRx1m9Vk/view?usp=sharing"
                target="_blank"
                rounded="8"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                CPF{" "}
              </Link>
              -
              <Link
                ml="3"
                as={"a"}
                href="https://drive.google.com/file/d/1GsfdYzl5PF05uE2VRVsZHcIvvVgmTc99/view?usp=drive_link"
                target="_blank"
                rounded="8"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
              >
                CNPJ{" "}
              </Link>
              Por segurança os arquivos vão compactados (caso nao possua um
              programa gerenciador de pacotes baixe um Aqui: ){" "}
              <Link
                ml="3"
                target="_blank"
                rounded="8"
                color={"gray.500"}
                _hover={{ color: "red.500" }}
                fontWeight={"bold"}
                as={"a"}
                href="https://www.win-rar.com/download.html?&L=9"
              >
                Winrar
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Licenças de Funcionamento:
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Alvará
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Corpo de Bombeiros
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Licença Sanitaria
            </ListItem>
            <Text
              pl="10"
              color="red.500"
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              Empresa em Implantação!?
            </Text>
            <ListItem bg="red.300">
              <ListIcon as={PiCalendarCheckBold} color="white.500" />
              Demonstrativo de receitas Projetadas (Modelo BNB)
              <Link
                ml="20"
                href={
                  "https://docs.google.com/spreadsheets/d/1abVl7x7efcsBOrn_vSpDh4bmQ6Cx-XDT/edit?usp=drive_link&ouid=109351377858299402679&rtpof=true&sd=true"
                }
                download
                target="_blank"
                color="blue.500"
                _hover={{ color: "red" }}
              >
                Baixe Aqui
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Documentação Societaria:
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              RG, CPF ou CNH (se casado(a): Documentação do Conjuge)
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Se Casado(a): Certidão de casamento
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Comprovação de renda: Declaração de imposto de renda ultimos 2
              Exercicios
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Titulo Eleitoral junto com o nada consta no TSE
            </ListItem>
            <ListItem>
              <ListIcon as={PiCalendarCheckBold} color="green.500" />
              Caso possua bens Moveis e Imoveis Enviar CRLV Digital para
              veiculos, Matriculas e/ou escrituras de imoveis
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Consultas;

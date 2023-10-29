'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdWhatsapp,
  MdOutlineSms,
} from 'react-icons/md'
import { BsPerson, BsInstagram } from 'react-icons/bs'
import { useForm } from '../../hooks/useForm'

const ContactPage = () => {
  const {form, handleForm, clearForm} = useForm({name: "", email: "", mensagem: ""})
  const enviaEmail = (e) => {
    e.preventDefault()
    console.log(form);
    clearForm();
  }

  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Escolha a melhor forma de entrar em contato
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        as={"a"}
                        target='_blank'
                        href="tel:+5585999433743"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +55 (85) 999433743
                      </Button>
                      <Button
                        as={"a"}
                        target='_blank'
                        size="md"
                        height="48px"
                        href="mailto:diretoria@indexacorporation.com.br?&subject=Ola, Gostaria de saber mais sobre seus serviços&body=<b>Olá, como faço para iniciar um processo com vocês?</b>"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        diretoria@indexa
                      </Button>
                      <Button
                        as={"a"}
                        target='_blank'
                        cursor={"pointer"}
                        href='https://maps.app.goo.gl/Vu5ginUevBBsfsKz6'
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Fortaleza-Ce, Brazil
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      as={"a"}
                      href="https://api.whatsapp.com/send?phone=+5585999433743&text=olá, Gostaria de saber mais sobre seus serviços"
                      target='_blank'
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdWhatsapp size="28px" />}
                      color={"white.500"}
                    />
                    <IconButton
                      as={"a"}
                      href='https://www.instagram.com/indexacorporation/'
                      target='_blank'
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsInstagram size="28px" />}
                      color={"white.500"}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name" onSubmit={enviaEmail}>
                        <FormLabel>Seu Nome</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input name="name" value={form.name} onChange={handleForm} type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>E-mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement  pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input name="email" value={form.email} onChange={handleForm} type="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensagem</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineSms color="gray.800" />
                          </InputLeftElement>
                          <Input name="mensagem" value={form.mensagem} onChange={handleForm}  type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button onClick={enviaEmail} variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Enviar Mensagem
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}




export default ContactPage;
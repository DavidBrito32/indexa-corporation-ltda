/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoBarChartOutline, IoCashOutline, IoLogoClosedCaptioning } from 'react-icons/io5'
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

const Description = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'white.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={"indexa.400"}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Mais Buscados
          </Text>
          <Heading>Principais Linhas de Credito</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Sabemos que o mundo financeiro é muito variado, e escolher um investimento adequado para aquela necessidade especifica é realmente muito complexo. Porem destacamos as 3 principais que são muito boas em taxas. 
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoBarChartOutline} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Pronampe'}
            />
            <Feature
              icon={<Icon as={IoCashOutline} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'FGI'}
            />
            <Feature
              icon={<Icon as={IoLogoClosedCaptioning} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Finame (BNDS)'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <Text
            textTransform={'uppercase'}
            color={'white.400'}
            mt="5"
            fontWeight={600}
            fontSize={'sm'}
            bg={"indexa.400"}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Sempre que precisar fazer algum tipo de investimento, analise primeiro a saude financeira de sua empresa, para que assim você consiga ser acertivo no investimento desejado
          </Text>
    </Container>
  )
}

export default Description;
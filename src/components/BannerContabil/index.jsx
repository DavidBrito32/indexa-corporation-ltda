import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Price from '../Price'

// Replace test data with your own
const features = [
    {
        id: 1,
        title: 'Sistemas de ultima geração',
        text: 'Utilizamos os sistemas mais avançados do mercado, para nos assegurar de detalhar todas as informações necessarias na hora de realizar as declarações de nossos clientes.',
      },
      {
        "id": 2,
        "title": "Auditoria de alto padrão",
        "text": "Nossa equipe de auditores experientes realiza uma análise minuciosa, garantindo a precisão e integridade das demonstrações financeiras."
      },
      {
        "id": 3,
        "title": "Assessoria tributária personalizada",
        "text": "Oferecemos orientação especializada para otimizar a carga tributária de cada cliente, sempre em conformidade com a legislação vigente."
      },
      {
        "id": 4,
        "title": "Gestão de folha de pagamento",
        "text": "Cuidamos de todos os aspectos relacionados à folha de pagamento, garantindo o cumprimento das obrigações trabalhistas e previdenciárias."
      },
      {
        "id": 5,
        "title": "Análise financeira estratégica",
        "text": "Avaliamos os indicadores financeiros para fornecer insights valiosos que ajudam na tomada de decisões estratégicas para o negócio."
      },
      {
        "id": 6,
        "title": "Contabilidade gerencial eficiente",
        "text": "Mantemos registros contábeis atualizados e produzimos relatórios precisos para auxiliar na gestão eficiente do negócio."
      },
      {
        "id": 7,
        "title": "Planejamento tributário personalizado",
        "text": "Desenvolvemos estratégias tributárias sob medida para maximizar os ganhos e manter a empresa em conformidade com a legislação vigente."
      },
      {
        "id": 8,
        "title": "Consultoria contábil especializada",
        "text": "Nossa equipe de especialistas está sempre disponível para fornecer orientação e esclarecer dúvidas sobre questões contábeis complexas."
      },
      {
        "id": 9,
        "title": "Gestão de ativos e passivos",
        "text": "Analisamos e otimizamos a gestão de ativos e passivos, garantindo que a empresa alcance seus objetivos financeiros de forma sustentável."
      },
      {
        "id": 10,
        "title": "Relatórios contábeis transparentes",
        "text": "Produzimos relatórios detalhados e de fácil compreensão, proporcionando uma visão clara da situação financeira da empresa."
      },
      {
        "id": 11,
        "title": "Conformidade regulatória garantida",
        "text": "Monitoramos constantemente as mudanças na legislação para assegurar que nossos clientes estejam sempre em conformidade com os requisitos legais."
      },
      {
        "id": 12,
        "title": "Contabilidade para startups",
        "text": "Oferecemos soluções contábeis adaptadas às necessidades específicas das startups, apoiando-as desde o início de sua jornada."
      }
]

const BannerContabil = () => {
  return (
    <Box p={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'left'}>
        <Heading fontSize={'3xl'}>Contabilidade ultrapassada? Nunca mais !</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
        Na dança dos números, a contabilidade é a maestra,
        Guiando empresas, no mar da gestão, a mais segura pista.
        Registra receitas, despesas, num balé de precisão,
        Onde cada transação é uma valiosa lição. 
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
        <Heading 
        bg={"indexa.500"}
        color={"white.500"}
        textAlign={"center"}
        fontSize={{base: "18px", md: "4xl"}}
        pl="5"
        height={"50px"}
        mt="50px"
        rounded={'md'}
        >Aqui temos uma politica de preço justo</Heading>
        <Text
        bg={"indexa.300"}
        pl={"20px"}
        textAlign={"center"}
        rounded={"md"}
        fontSize={{base: "16px", md: "2xl"}}
        color="white.500"
        >Os Melhores Planos para que você não fique sem assistencia. Confira</Text>
        <Price />
      </Container>
    </Box>
  )
}

export default BannerContabil;
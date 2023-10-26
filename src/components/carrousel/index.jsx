import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { useState } from 'react'

import slide1 from './assets/slide_um.jpg';
import slide2 from './assets/slide_dois.webp';
import slide3 from './assets/slide_tres.jpeg';
import slide4 from './assets/slide_quatro.webp';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Carrousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Investimentos Financeiros',
      text: "Investimentos financeiros em bancos publicos e privados de forma rapida e simplificada, chega de dor de cabeça na hora de contratar recursos para sua empresa",
      image: slide1,
      color: "white.500"
    },
    {
      title: 'Contabilidade de alto nivel para empresas',
      text: "O segmento contabil para as empresas na atualidade é de muita importancia, principalmente com o serviço ao qual vamos receber. Por tanto Não fique com duvidas, contate a Indexa e veja o que podemos fazer por você",
      image:slide2,
      color: "indexa.300"
    },
    {
      title: 'Apoio Administrativo',
      text: "Problemas com seu setor administrativo? A indexa conta com acessoria especifica personalizada, que visa atender a todos os segmentos de empresas do mercado. Venha fazer uma consultoria com nossa empresa e descubra o que podemos fazer por sua empresa!",
      image:slide3,
      color: "white.500"
    },
    {
      title: 'Consultoria Tecnólogica',
      text: "Descubra como aplicar de forma eficiente a tecnologia em sua empresa, sem esquecer com a sustentabilidade",
      image:slide4,
      color: "white.400"
    },
  ]

  return (
    <Box position={'relative'} height={'80vh'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="white.500"
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        color="white.500"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color={card.color} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text color={card.color} fontSize={{ base: 'md', lg: '2xl' }}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Carrousel;
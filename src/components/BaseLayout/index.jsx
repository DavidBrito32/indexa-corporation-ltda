/* eslint-disable react/prop-types */
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi';
import {FcSearch, FcHome, FcBullish, FcOpenedFolder, FcList, FcBusinessContact} from 'react-icons/fc';
import {Outlet, NavLink } from 'react-router-dom';
import Footer from '../Footer';
import Logo from './assets/logo.png';

const LinkItems= [
  { name: 'Home', icon: FcHome, path: "/" },
  { name: 'Contabil', icon: FcBullish, path: "/contabil" },
  { name: 'Consultas', icon: FcSearch, path: "/consultas" },
  { name: 'Cadastro', icon: FcOpenedFolder, path: "/cadastro" },
  {name: 'Relatorios', icon: FcList, path: "/relatorios"},
  { name: 'Contact', icon: FcBusinessContact, path: "/contact" },
]
const BaseLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <Box minH="50vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onClose={onClose} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Box minH={{base: "50vh", md: "68vh"}}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg="bg.500"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      onClick={onClose}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box >
          <Image w={{base: "50%", md: "full"}} src={Logo} alt="logo_Indexa" />
        </Box>
        <CloseButton color="white.500" fontSize="1rem" display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem color="white.500" onClick={onClose} endereco={link.path} fontSize={{base: "22px", md: "24px"}} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}
const NavItem = ({ icon, endereco, children, ...rest }) => {
  return (
    <Box
      as={NavLink}
      to={endereco}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.900',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="bg.500"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="space-between"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        color="white.500"
        fontSize="1.5rem"
        _hover={{bg: "transparent"}}
      />
        <Box w="35%">
          <Image src={Logo} alt="logo_Indexa" />
        </Box>
    </Flex>
  )
}


export default BaseLayout;
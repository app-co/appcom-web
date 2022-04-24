/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/home.module.scss'
import image from '../assets/image.png'
import { Flex, Button, Container, VStack, HStack, Link, Image, Text, useBreakpointValue, Box } from '@chakra-ui/react'
import {THEME } from '../styles/theme'
import { useCallback, useState } from 'react'

const {colors} = THEME

export default function Home() {
  const [isLoading, setLoading] = useState(false)

  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  })

  const handleOrçamento = useCallback(() => {
    setLoading(true)
    setTimeout(() => {

      setLoading(false)
    }, 2000);
  }, [])
  return (
    
    <Flex
      w='100vw' 
      h='90vh'
      p='30' 
      pb='20'
      bg={colors.primary[1]}
      display='box'
      alignItems='center'
    >
 

      <Flex
        display={isDrawer ? "box" : "flex"}
        fontSize={["14", "16", "24"]}
        alignItems='center'
      >
        <Flex alignItems='center' justifyContent='center' mb={10} >
          <Image align="center" opacity='0.7' w={["160px", "400px"]} h={["160px", "400px"]} src="/images/image.png" />
        </Flex>

        <Text ml={isDrawer ? '0' : 20} maxWidth={600}  >Aplicativos ou paginas Web traz 
          inúmeras finalidades para sua empresa. Por 
          exemplo, servir para fortalecer os relacionamentos com os clientes 
          ou apresentar as vantagens de produtos e 
          serviços. Com alguns toques no smartphone 
          ou alguns cliques em uma página web é possível 
          ter acesso à conteúdos, serviços, produtos 
          ou fechar uma compra.
        </Text>
      </Flex>

      <Box mt={10} fontSize={[24, 36]} maxW='500' >
        <Text fontWeight="bold" >Solicite um orçamento e faça parte de
          um mundo gigante, que cabe na palma 
          da sua mão!
        </Text>
      </Box>
 
      <Flex className={styles.containerButton} >
        <Button
          as='a'
          onClick={handleOrçamento}
          href='/orcamento'
          className={styles.button}
          w='60rem'
          h='3.5rem'
          fontSize='1.5rem'
          isLoading={isLoading}
        >
          solicitar um orçamento
        </Button>

      </Flex>

      <Flex
        mt='50'
        align="center"
        px="10"
        justifyContent='flex-end'
      >
          <Link as="a" href="https://www.facebook.com/william.danilo.96/" >
            <Image w={50} h={60} src="/images/Facebook.svg" alt="face" />
          </Link>

          <Link style={{marginLeft: 45}}  href="https://wa.me/5514998377446">
            <Image w={50} src="/images/WhatsApp.svg" alt="whats" />
          </Link>

      </Flex>
    </Flex>
  )
}

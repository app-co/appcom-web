import {} from 'react'
import { AspectRatio, Box, Center, Flex, Image, Link, SimpleGrid, Text, useBreakpointValue,  } from '@chakra-ui/react'
import styles from '../styles/produtos.module.scss'
import { THEME } from '../styles/theme'
import { CardProducts } from '../components/CardProducts/index.'

import finance from '../../public/images/finance.png'
import { itens } from '../Projjetos/itens'

const {colors} = THEME

export default function Produtos() {
    const isDrawer = useBreakpointValue({
        base: true,
        lg: false,
    })
    const {colors} = THEME
    return (
        <Box 
            w='100vw'
            h='100vh' 
            bg={colors.primary[1]}
            p='30'
            pb={40}
            
        >
           <SimpleGrid columns={isDrawer ? 1 : 2} spacing={10}>

                {itens.map(h => (
                   <Flex
                   key={h.title} 
                   >
                       <CardProducts
                            image={h.image} 
                            title={h.title} 
                            description={h.description}
                       >
                           <SimpleGrid 
                               columns={3} 
                               fontWeight='semibold'
                               mt={10}
                               spacing={19}
                               alignItems='space-between'
                           >
                                {h.loja.map(p => (
                                    <Flex
                                    flex={1}
                                    key={p.link}
                                    alignItems='center'
                                    justifyContent='center'
                                    >
                                        <Link href={p.link} as="a" >{p.title}</Link>
                                    </Flex>
                                    ))}
                            </SimpleGrid>
                       </CardProducts>
                   </Flex>
                ))}
            </SimpleGrid>
            
            <Box pb={20} />
        </Box>
    )
}
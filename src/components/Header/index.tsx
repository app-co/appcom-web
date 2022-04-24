import { Box, Button, Flex, Image, useBreakpointValue, useTheme } from '@chakra-ui/react'
import { THEME } from '../../styles/theme'
import { ButtonHeader } from '../Buttom'
import { Links } from './Links'


export function Header() {
    const {colors} = THEME
    const isDrawer = useBreakpointValue({
        base: true,
        lg: false,
    })
    
    return (
        <Flex 
            as="header"
            w="100%"
            maxW={1980}
            mx="auto"
            bg={colors.primary[2]}
            p={8}
            justifyContent="center"
        >
            <Image w={["100px", "120px", "200px"]} src="./images/logo.svg" alt="logo"/>

            <Links />
            {!isDrawer && (
                <Flex ml="auto">
                    <ButtonHeader title="Solicitar um orçamento" />
                </Flex>

            )}
        </Flex>
    )
}
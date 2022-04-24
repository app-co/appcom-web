import { Box, Button, Flex, Input as BoxInput, SimpleGrid, Textarea } from "@chakra-ui/react";
import { Input } from "../components/Input";
import { THEME } from "../styles/theme";

export default function Orçamento() {
    const {colors} = THEME
    return (
        <Box
            w='100%'
            h='80vh'
            bg={colors.primary[1]}
        >
            <Flex>

                <Input nome='Nome' />

                <Input nome='E-mail' />

            </Flex>
            
            <Flex
                pr={10}
                pl={10}
                mt={10}

            >
                <Textarea 
                    w='100%'
                    alignItems='initial'
                    h='20vh'

                />

            </Flex>

            <Flex
                align='center'
                justify='center'
                mt={10}
            >
                <Button
                    w='200px'
                    color={colors.primary[2]}
                >ENVIAR</Button>

            </Flex>

        </Box>
    )
}
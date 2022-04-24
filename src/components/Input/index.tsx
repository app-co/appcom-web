import { Box, Flex, Text, Input as ChakraInput } from "@chakra-ui/react";

interface Props {
    nome: string;
}

export function Input({nome}: Props) {
    return ( 
        <Box>
            <Flex
                pl="10"
                pr="10"
                w="100%" 
            >
                <ChakraInput 
                    placeholder={nome}
                />
            </Flex>
        </Box>
    )
}
import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { THEME } from "../../styles/theme";

interface Props {
    image: string
    title: string
    description?: string
    children: ReactNode
}

export function CardProducts({image, title, description, children}: Props) {
    const {colors} = THEME
    return ( 
        <Box
            w="100%"
            bg={colors.shade[3]}
            justifyContent='center'
            alignItems='center'
            borderRadius={10}
            p={5}
        >
            <Flex alignItems='center' justifyContent='center' >
                <Image maxH={400} src={image} alt="image" />
            </Flex>

            <Text mt={10} fontWeight='bold' fontSize={26} >{title}</Text>
            <Text>{description}</Text>
            {children}
        </Box>
    )
}
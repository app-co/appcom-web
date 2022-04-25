import { Box, Flex, Link, } from "@chakra-ui/react";
import { THEME } from "../../styles/theme";

type Props = {
    title: string;
}

const {colors} = THEME

export function Links() {
    return (
        <Flex  
            alignItems="center"
            fontWeight="semibold" 
            fontSize={["14px", "16px", "20px"]}
        >
            <Box
                borderWidth={4}
                borderBottomColor={colors.shade[1]}
                borderTopColor={colors.primary[2]}
                borderLeftColor={colors.primary[2]}
                borderRightColor={colors.primary[2]}
                alignItems="center"
                ml={["60px"]}
                h={["50", "60px", "70px"]}

            >
                <Link href="/" _hover={{fontSize: "24"}} as="a">
                    HOME
                </Link>
            </Box>

            <Box
                borderWidth={4}
                borderBottomColor={colors.shade[1]}
                borderTopColor={colors.primary[2]}
                borderLeftColor={colors.primary[2]}
                borderRightColor={colors.primary[2]}
                alignItems="center"
                ml={["30px"]}
                h={["50", "60px", "70px"]}
                
            >
                <Link href="/projetos" _hover={{fontSize: "24"}}  as="a">
                    PROJETOS
                </Link>
            </Box>

        </Flex>
    )
}
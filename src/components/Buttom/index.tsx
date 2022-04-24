import { Button, ButtonProps } from "@chakra-ui/react";
import { THEME } from "../../styles/theme";

interface Prop extends ButtonProps {
    title: string;
}

const {colors} = THEME

export function ButtonHeader({title, ...children}: Prop) {
    return (
        <Button _hover={{bg: colors.shade[2]}} border="none" w="100%" h="45px" fontSize="3xl" color={colors.primary[2]} >
            {title}
        </Button>
    )
}
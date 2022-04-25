import { Box, Flex, Text, Input as ChakraInput, InputProps, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputProps {
    nome: string;
    label?: string
    error: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({nome, label, error, ...rest}, ref) => {
    return ( 
            <FormControl isInvalid={!!error}
                pl="10"
                pr="10"
                w="100%"
            >
                {!!label && <FormLabel htmlFor={nome}>{label}</FormLabel>}
                <ChakraInput 
                    placeholder={nome}
                    ref={ref}
                    {...rest}
                />
                {!!error && (
                    <FormErrorMessage>{error.message}</FormErrorMessage>
                )}
            </FormControl>
    )
}

export const Input = forwardRef(InputBase)
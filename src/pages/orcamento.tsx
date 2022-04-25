import { 
    Alert, 
    Box, 
    Button,
    useToast,
    Flex,
    FormControl,
    Input as BoxInput,
    SimpleGrid,
    Text,
    Textarea,
    useBreakpointValue,
} from "@chakra-ui/react";

import { useCallback, useState } from "react";
import { Input } from "../components/Input";
import { THEME } from "../styles/theme";
import {useForm} from 'react-hook-form'
import { addDoc, collection,  } from "firebase/firestore";
import { db,  } from "../config/firebase";
import { useRouter } from "next/router";

export default function Orçamento() {
    const {register, handleSubmit, formState} = useForm()
    const {push} = useRouter()
    const {errors} = formState
    const toast = useToast();

    const [load, setLoad] = useState(false)

    const handleEnviar = useCallback((data) => {
        setLoad(true)
        setTimeout(() => {
            const Form = collection(db, 'orçamento')
            addDoc(Form, {
                data
            }).then(() => {
                setLoad(false)
                toast({
                    title: 'Solicitação enviada',
                })
                push('/')
            })
            
        }, 1000);

    }, [toast])

    const isDrawer = useBreakpointValue({
        base: true,
        lg: false
    })
    const {colors} = THEME

    return (
        <Box
            w='100%'
            h='80vh'
            bg={colors.primary[1]}
            as='form'
            onSubmit={handleSubmit(handleEnviar)}
        >

                <SimpleGrid columns={isDrawer ? 1 : 2} spacing={4} >

                    <Input id="nome" type='text' nome='Nome' label='nome' error={errors.nome}
                        {...register('nome', {required: 'nome obrigatório'})}
                    />

                    <Input id='email' type="email" nome='E-mail' label='email' error={errors.email}
                        {...register('email', {required: 'email obrigatorio'})}
                    />

                    <Flex w={[300, 400]} >
                        <Input 
                            nome='Telefone'
                            id='telefone'
                            type='tel' 
                            label='telefone' error={errors.telefone}
                            {...register('telefone', {required: 'telefone obrigatorio'})}
                        />

                    </Flex>

                </SimpleGrid>
            
                <Flex
                    pr={10}
                    pl={10}
                    mt={10}

                >
                    <Textarea 
                        w='100%'
                        alignItems='initial'
                        h='20vh'
                        required
                        {...register('description')}
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
                    type='submit'
                    isLoading={load}
                    
                >ENVIAR</Button>

            </Flex>

        </Box>
    )
}
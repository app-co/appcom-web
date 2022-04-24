import { extendTheme } from '@chakra-ui/react'

export const THEME = {
    colors: {
        primary: {
            '1': 'linear-gradient(180deg, rgba(0, 46, 96, 1) 35%, rgba(26, 136, 152, 1) 100%);',
            '2': 'rgba(0, 46, 96, 1)',
            '3': 'rgba(0, 46, 96, 0.6)',
            '4': 'rgba(0, 46, 96, .3)',
        },

        secundary: {
            '1': 'rgba(26, 136, 152, 1)',
            '2': 'rgba(26, 136, 152, 0.6)',
            '3': 'rgba(26, 136, 152, .3)',
        },

        shade: {
            '1': 'rgba(255, 254, 254, 1)',
            '2': 'rgba(255, 254, 254, 0.6)',
            '3': 'rgba(255, 254, 254, 0.3)',
        }
    },

    fonts: {
        heading: 'k2d',
        body: 'k2d'
    },

    styles: {
        global: {
            body: {
                bg: 'rgba(26, 136, 152, 1)',
                color: 'gray.50'
            }
        }
    }
}

export const theme = extendTheme(THEME)


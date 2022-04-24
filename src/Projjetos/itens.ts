export interface DtosItens {
    image: string
    title: string
    description: string;
    loja: {title: string, link: string}[]
}

export const itens: DtosItens[] = [
    {
        image: './images/finance.png', 
        title: 'Go finance', 
        description: 'Um app simple porem muito prático no seu dia a dia para anotar seus gastos no mês', 
        loja: [{title: 'ApleStore', link: '1'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}]},

    {
        image: './images/geb.png', 
        title: 'G.E.B networking', 
        description: 'Aplicativo de relacionamento entre empresas', 
        loja: [{title: 'ApleStore', link: '2'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}]
    },


    {
        image: './images/daisy.png', 
        title: 'Dai Nails', 
        description: 'Aplicativo para agendamento de horários na área da beleza', 
        loja: [{title: 'ApleStore', link: '3'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}],

    },

    {
        image: './images/cartao de visita.png', 
        title: '', 
        description: '', 
        loja: [{title: 'ApleStore', link: '4'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}],

    },
]
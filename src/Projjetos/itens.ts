export interface DtosItens {
    image: string
    title: string
    description: string;
    loja: {title: string, link: string}[]
}

export const itens: DtosItens[] = [
    {
        image: './images/projetos/finance.png', 
        title: 'Go finance', 
        description: 'Um app simple porem muito prático no seu dia a dia para anotar seus gastos no mês', 
        loja: [{title: 'ApleStore', link: '1'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}]},

    {
        image: './images/projetos/geb.png', 
        title: 'G.E.B networking', 
        description: 'Aplicativo de relacionamento entre empresas', 
        loja: [{title: 'ApleStore', link: '2'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}]
    },


    {
        image: './images/projetos/daisy.png', 
        title: 'Dai Nails', 
        description: 'Aplicativo para agendamento de horários na área da beleza', 
        loja: [{title: 'ApleStore', link: '3'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}],

    },

    {
        image: './images/projetos/pizza.png', 
        title: 'Aplicativo para restaurante', 
        description: 'Um app para facilitar o pedido de um cliente e uma ferramenta muito prática para o garçom', 
        loja: [{title: 'ApleStore', link: '4'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}],

    },

    {
        image: './images/projetos/dash.png', 
        title: 'Site para controle de usuários', 
        description: 'Cadastro de usuários na plataforma', 
        loja: [{title: 'ApleStore', link: '4'}, {title: 'PlayStore', link: ''}, {title: 'web', link: ''}],

    },
]
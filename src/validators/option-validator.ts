// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-200 border-rose-200

import { PRODUCT_PRICE } from "@/config/products"


export const COLORS = [
    {
        label: "Preto",
        value: "black",
        tw: "zinc-900"
    },
    {
        label: "Azul",
        value: "blue",
        tw: "blue-950"
    },
    {
        label: "Rosê",
        value: "rose",
        tw: "rose-200"
    },
] as const

export const MODELS = {
    name: 'models',
    options: [
        {
            label: 'iPhone X',
            value: 'iphonex',
        },
        {
            label: 'iPhone 11',
            value: 'iphone11',
        },
        {
            label: 'iPhone 12',
            value: 'iphone12',
        },
        {
            label: 'iPhone 13',
            value: 'iphone13',
        },
        {
            label: 'iPhone 14',
            value: 'iphone14',
        },
        {
            label: 'iPhone 15',
            value: 'iphone15',
        },
    ]
} as const

export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICE.material.silicone,
        },
        {
            label: "Policabornato",
            value: "polycarbonate",
            description: "Mais resistente",
            price: PRODUCT_PRICE.material.polycarbonate,
        },
    ]
} as const 

export const FINISHES = {
    name: "Acabamento",
    options: [
        {
            label: "Acabamento suavizado",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICE.finish.smooth,
        },
        {
            label: "Acabamento texuturizado",
            value: "textured",
            description: "Mais charme para sua capinha",
            price: PRODUCT_PRICE.finish.textured,
        },
    ]
} as const 
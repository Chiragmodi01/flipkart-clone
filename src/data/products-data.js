import { v4 as uuid } from "uuid";
// https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/${product.image}.jpg

export const products = [ 
    {
        id: uuid(),
        brand: "Puma",
        name: "Men Polo Collar Golf T-shirt",
        gender: "Men",
        price: 3499,
        oldPrice: 4999,
        rating: 4.3,
        ratedBy: 180,
        image: `17003028/2022/2/1/dd994f18-bc48-472d-845c-191fd439063a1643704156414Tshirts1`
    },
    {
        id: uuid(),
        brand: "Puma",
        gender: "Women",
        name: "Women dry slim fit T-shirt",
        price: 1799,
        oldPrice: 2999,
        rating: 4.8,
        ratedBy: 120,
        image: `15690646/2021/9/30/4b2e736d-adde-461c-b38c-b470d0fb2ef71632986853792Tshirts1`
    },
    {
        id: uuid(),
        brand: "Puma",
        name: "Men Printed Sporty Jacket",
        gender: "Men",
        price: 2199,
        oldPrice: 3999,
        rating: 4.3,
        ratedBy: 68,
        image: `15119056/2021/10/12/d1f4df73-8616-4e39-89e3-278c48ab13ee1634032679634-Puma-Men-Jackets-1801634032678736-1`
    },
    {
        id: uuid(),
        brand: "Puma",
        name: "Full-Zip Sporty Jacket",
        gender: "Women",
        price: 2999,
        oldPrice: 4999,
        rating: 4.1,
        ratedBy: 57,
        image: `15139528/2021/11/16/c6bc77f7-113a-4d90-9c78-16bf0a870c7b1637040368801-Puma-Women-Jackets-6011637040367996-1`
    },
    {
        id: uuid(),
        brand: "Nike",
        name: "Women Polo Collar T-shirt",
        gender: "Women",
        price: 2895,
        oldPrice: 3999,
        rating: 4.7,
        ratedBy: 90,
        image: `17597960/2022/4/8/0c4776ee-8cf5-47fd-9895-cbb0cdacf8441649406976667-AS-W-NSW-AIR-PIQUE-POLO-4071649406976338-1`
    },
    {
        id: uuid(),
        brand: "Nike",
        name: "Men Printed Cotten T-shirt",
        gender: "Men",
        price: 2195,
        oldPrice: 2999,
        rating: 4.8,
        ratedBy: 25,
        image: `17369144/2022/4/8/3bb3c09d-b70a-4878-af34-7b34a7b3337a1649407789017ASMNSWSO3GRAPHICTEE1`
    },
    {
        id: uuid(),
        brand: "Nike",
        name: "AS FEMME CREW T-shirt",
        gender: "Women",
        price: 1922,
        oldPrice: 3945,
        rating: 4.5,
        ratedBy: 70,
        image: `15337808/2021/9/14/2f00dfcf-3190-4036-a64e-e7183e9c4fb41631610475990-Nike-Women-Navy-Blue--White-AS-Sportswear-Femme-FLC-GX-Crew--1`
    },
    {
        id: uuid(),
        brand: "Nike",
        gender: "Men",
        name: "Solid Sporty Jacket",
        price: 4225,
        oldPrice: 4695,
        rating: 4.4,
        ratedBy: 61,
        image: `13529344/2021/3/8/371b263a-86a2-44cb-a08b-a176892feb841615192473530-Nike-Sportswear-Tribute-Mens-N98-Jacket-2301615192469969-1`
    },
]
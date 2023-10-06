export interface Drink {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  imageUrl: string
}

export const data: Drink[] = [
  {
    id: 'f6a9d314-c229-4bb2-bc42-7e6933f836aa',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/expresso.png',
  },
  {
    id: 'e6bafcb7-297b-4f01-8459-8151a3f6613d',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/americano.png',
  },
  {
    id: 'e75e2c6f-42fa-453c-9578-81f0a76fc8cb',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/expresso-cremoso.png',
  },
  {
    id: 'c2be792d-1e5c-4350-a251-e779ca1fb594',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/cafe-gelado.png',
  },
  {
    id: 'e3bb9893-f84c-46e8-9f50-e926eb560d75',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/cafe-com-leite.png',
  },
  {
    id: '5a16eb91-1255-4135-b8d6-a9c41d549854',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/latte.png',
  },
  {
    id: '76ef0ccb-2a4b-4d67-87de-2d671f413c59',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/capuccino.png',
  },
  {
    id: '0952741a-649c-4c4c-8962-ec75cd8bbd52',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/macchiato.png',
  },
  {
    id: '8d02eac8-cd45-49bf-8c25-55139a929323',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/mochaccino.png',
  },
  {
    id: '8eb50d6b-6ee5-4cb5-9bfe-fde5dcebf429',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/chocolate-quente.png',
  },
  {
    id: '9f55d92a-01c7-412f-a077-d02ee19375a3',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/cubano.png',
  },
  {
    id: '8ed165c0-ca30-4cfb-b547-79a149e6571b',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/havaiano.png',
  },
  {
    id: 'b7422769-b4ad-4d48-87ce-ed85b8e9a914',
    title: 'Árabe',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['especial'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/arabe.png',
  },
  {
    id: 'ed6f5a80-24fb-4019-9b15-6e061d63455b',
    title: 'Irlandês',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['especial', 'alcoólico'],
    price: 9.99,
    imageUrl: '/src/assets/drinks/irlandes.png',
  },
]

import { Platschauds } from "../interfaces/PlatsChauds";

export const PLATSCHAUDS: Platschauds[] = [
  {
    title: 'Tex-Mex',
    name: 'les TEX-MEX',
    text: 'Chicken wings, Jalapenos, découvrez tout nos plat TEX-MAX',
    image: '../../assets/images/food/wings.jpg',
    routerLink: '/texmex'
  },
  {
    title: 'Pâtes',
    name: 'les pâtes',
    text: 'Nos Tagliatelles et Lasagnes sauront vous régaler.',
    image: '../../assets/images/food/pasta.jpg',
    routerLink: '/pates'
  },
  {
    title: 'Päella',
    name: 'la Paëlla',
    text: 'Envie d\'une Paëlla ?',
    image: '../../assets/images/food/hotfood.jpg',
    routerLink: '/paella'
  }
];

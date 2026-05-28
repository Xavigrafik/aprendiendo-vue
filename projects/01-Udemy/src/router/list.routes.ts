

export interface RouterLink {
    name: string;
    path: string;
    title: string;
}


const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Home' },
  { path: '/about', name: 'about', title: 'About' },
  { path: '/pokemons', name: 'pokemons', title: 'Pokémons' },
];

export default routerLinks;
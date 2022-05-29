// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

import heros from "../data/heros";

// import heroes, { owners } from '../data/heroes';


export const getHeroById = (id) => heros.find( (hero) => hero.id === id );

export const getHerosByOwner = ( owner ) => heros.filter( (hero) => hero.owner === owner );




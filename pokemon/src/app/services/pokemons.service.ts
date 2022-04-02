import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  // starterPokemon = ["bulbasaur", "squirtle", "charmander"];
  baseurl = "https://pokeapi.co/api/v2/pokemon";
  show: boolean = true;

  subjectSelected$ = new Subject();

  constructor(private http: HttpClient) { }

  getPokemon(pokemonitem: string) {
    return this.http.get<Pokemon[]>([this.baseurl, pokemonitem].join('/')).pipe(
      map((pokemonRes: any) => {
        const pokemon = {
          id: pokemonRes.id,
          height: pokemonRes.height,
          weight: pokemonRes.weight,
          sprites: pokemonRes.sprites,
          species: pokemonRes.species,
          types: pokemonRes.types,
        };
        // console.log(pokemon);
        return pokemon;
      })
    ) ;
    
  }
    
  getSelect(data: any) {
    this.subjectSelected$.next(data);
    console.log(data);
  }

  getReset() {
    this.subjectSelected$.next('');
  }


}

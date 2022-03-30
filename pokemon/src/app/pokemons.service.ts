import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from './pokemon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  // starterPokemon = ["bulbasaur", "squirtle", "charmander"];
  baseurl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokemon(pokemonitem: string): Observable<PokemonResponse[]> { 
    return this.http.get<PokemonResponse[]>([this.baseurl, pokemonitem].join('/'));
  }
}

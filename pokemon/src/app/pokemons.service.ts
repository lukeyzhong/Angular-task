import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { PokemonResponse } from './pokemon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  // starterPokemon = ["bulbasaur", "squirtle", "charmander"];
  baseurl = "https://pokeapi.co/api/v2/pokemon";
  show: boolean = true;

  subjectSelected$ = new Subject();

  constructor(private http: HttpClient) { }

  getPokemon(pokemonitem: string): Observable<PokemonResponse[]> { 
    return this.http.get<PokemonResponse[]>([this.baseurl, pokemonitem].join('/'));
  }

  getSelect(data: string) {
    this.subjectSelected$.next(data);
  }

  getReset() {
    this.subjectSelected$.next('');
  }


}

import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { PokemonsService } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  show: boolean = true;
  selectedPokemon = '';
  arr: any = [];
  pokemonlist!: any;
  starterPokemon = ["bulbasaur", "squirtle", "charmander"];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.subjectSelected$.subscribe((data: any) => {
      if (data) {
        this.show = false;
        this.selectedPokemon = data.name;
      } else {
        this.show = true;
        this.selectedPokemon = '';
      }
      console.log(data.name);
    })

    for (let pokemonitem of this.starterPokemon) {
      this.arr.push(this.pokemonsService.getPokemon(pokemonitem))
    }

    forkJoin(this.arr).subscribe((data: any) => {
      this.pokemonlist = data;
    });
  }

  title = '';

  onSetback() {
    this.pokemonsService.getReset();
  }

}

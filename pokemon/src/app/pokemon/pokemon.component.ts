import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PokemonResponse } from '../pokemon.model';
import { PokemonsService } from '../pokemons.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  arr: any = [];
  pokemonlist!: any;
  // pokemonlist!: PokemonResponse[];
  starterPokemon = ["bulbasaur", "squirtle", "charmander"];

  constructor(private pokemonsService: PokemonsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    for (let pokemonitem of this.starterPokemon) {

      this.arr.push(this.pokemonsService.getPokemon(pokemonitem))
    }

    forkJoin(this.arr).subscribe((data: any) => {
      this.pokemonlist = data;
    })
  }

  showDialog() {
    this.dialog.open(DialogComponent, {
      width: '250px',
      // position: { right: '0',
      //             top: '50px'},
      data: this.pokemonlist
    })
  }
}

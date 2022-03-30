import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any;
  constructor(private pokemonsService: PokemonsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  showDialog() {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.pokemon
    })
  }
}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../pokemon.model';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemonData: any,
    private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    // console.log(this.pokemonData);
  }
  noChoose() {
    this.dialogRef.close();
  }

  choose(item: any) {
    // this.pokemonsService.show = false;
    this.pokemonsService.getSelect(item);
    // console.log(this.pokemonsService.subjectSelected$);
    // console.log(item);
    this.dialogRef.close();
  }



}

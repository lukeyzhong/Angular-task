import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() show!: boolean;
  selectedPokemon!: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  noChoose() {
    this.dialogRef.close();
  }

  choose(data: any) {
    this.show = false;
    this.selectedPokemon = data;
    console.log(this.selectedPokemon);

  }



}

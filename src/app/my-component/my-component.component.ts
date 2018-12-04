import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  private listeNom: string[] = [];
  private angularLogo :string="./assets/angularLogo.png";
  private nom: string = "";

  constructor() { }

  createList() {
    if (this.nom) {
      this.listeNom.push(this.nom);
      this.nom = '';
    }
  }

  ngOnInit() {
  }

}

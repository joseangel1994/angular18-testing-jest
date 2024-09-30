import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Pokemon} from "../interfaces";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-charizard',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './charizard.component.html'
})
export class CharizardComponent implements OnInit{

  charizard!: Pokemon

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.charizard = pokemon
      })
  }

}

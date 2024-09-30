import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FatherSonComponent} from "../father-son/father-son.component";
import {Client} from "../interfaces";

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [
    JsonPipe,
    FatherSonComponent
  ],
  templateUrl: './father.component.html'
})
export class FatherComponent {
  public client?: Client

  onSetClient(name: string) {
    this.client = {id: 1, name}
  }

}

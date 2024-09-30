import {Component, EventEmitter, Input, Output} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {Client} from "../interfaces";

@Component({
  selector: 'app-father-son',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './father-son.component.html'
})
export class FatherSonComponent {

  @Input() client?: Client
  @Output() onDeleteClient = new EventEmitter()
  @Output() onClientUpdated = new EventEmitter<Client>()

  onDelete() {
    this.client = undefined
    this.onDeleteClient.emit()
  }

  onChange(newId: number) {
    if(!this.client) return

    this.client = {
      ...this.client,
      id: newId
    }

    this.onClientUpdated.emit(this.client)
  }

}

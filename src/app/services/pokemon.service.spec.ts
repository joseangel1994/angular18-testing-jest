import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get bulbasaur info', (done) => {
    service.getPokemon(1)
      .subscribe(pokemon => {
        expect(pokemon.name).toBe('bulbasaur')

        done() //This callback force the test to wait until done is called or after 10 seconds
      })
  })
});

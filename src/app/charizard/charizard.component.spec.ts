import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from './charizard.component';
import {PokemonService} from "../services/pokemon.service";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let pokemonService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharizardComponent],
      providers: [PokemonService, provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    pokemonService = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load charizard', () => {
    const dummyPokemon = {
      name: 'charizard!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png'
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    const h3 = compiled.querySelector('h3')
    const img = compiled.querySelector('img')

    expect(h3?.textContent?.toLowerCase()).toContain(dummyPokemon.name.toLowerCase())
    expect(img?.src).toBe(dummyPokemon.sprites.front_default)
    expect(img?.alt).toBe(dummyPokemon.name)
  })
});

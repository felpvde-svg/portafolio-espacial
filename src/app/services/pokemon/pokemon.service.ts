import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener Pokémon por nombre o ID
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name.toLowerCase()}`);
  }

  // Obtener lista de Pokémon con límite
  getPokemons(limit: number, offset: number = 0): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }
}

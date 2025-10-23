import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  searchName: string = '';
  limit: number = 30;
  pokemons: any[] = [];
  loading: boolean = false;
  selectedPokemon: any = null; // 👈 nuevo: para el modal
  description: string = ''; // 👈 descripción del Pokémon
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    if (!this.limit || this.limit <= 0) {
      this.error = 'Por favor ingresa una cantidad válida.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`)
      .subscribe({
        next: (response) => {
          this.pokemons = response.results;
          this.loading = false;
        },
        error: () => {
          this.error = 'Error al cargar los Pokémon.';
          this.loading = false;
        },
      });
  }

  searchPokemon() {
    if (!this.searchName.trim()) {
      this.getPokemons();
      return;
    }

    this.loading = true;
    this.error = '';

    this.http
      .get<any>(
        `https://pokeapi.co/api/v2/pokemon/${this.searchName.toLowerCase()}`
      )
      .subscribe({
        next: (response) => {
          this.pokemons = [
            {
              name: response.name,
              url: `https://pokeapi.co/api/v2/pokemon/${response.id}`,
            },
          ];
          this.loading = false;
        },
        error: () => {
          this.pokemons = [];
          this.error = 'Pokémon no encontrado.';
          this.loading = false;
        },
      });
  }

  getPokemonImage(url: string) {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  // 👇 NUEVO: abre modal con detalles y descripción
  openPokemon(pokemon: any) {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    this.loading = true;
    this.selectedPokemon = null;
    this.description = '';

    // 1️⃣ Obtener información detallada
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe({
      next: (data) => {
        this.selectedPokemon = {
          id: data.id,
          name: data.name,
          image:
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name),
        };

        // 2️⃣ Obtener descripción desde species
        this.http
          .get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
          .subscribe({
            next: (specie) => {
              const entry =
                specie.flavor_text_entries.find(
                  (e: any) => e.language.name === 'es'
                ) ||
                specie.flavor_text_entries.find(
                  (e: any) => e.language.name === 'en'
                );
              this.description = entry
                ? entry.flavor_text.replace(/\n|\f/g, ' ')
                : 'Sin descripción disponible.';
              this.loading = false;
            },
          });
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  // 👇 cerrar modal
  closeModal() {
    this.selectedPokemon = null;
  }
}

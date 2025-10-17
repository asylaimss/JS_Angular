import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  loadPokemons() {
    this.loading = true;
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10')
      .subscribe(response => {
        this.pokemons = response.results;
        this.loading = false;
      });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, tap, catchError } from 'rxjs/operators';

type Poke = { name: string, url: string };

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: Poke[] = [];
  loading = false;
  errorMsg = '';

  private search$ = new Subject<string>();
  private allCache: Poke[] | null = null;              // кэш полного списка
  private allUrl = 'https://pokeapi.co/api/v2/pokemon?limit=2000'; // большой список

  constructor(private http: HttpClient) {
    this.search$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => { this.loading = true; this.errorMsg = ''; }),
        switchMap(term => this.fetchAll()
          .pipe(
            map(list => {
              const q = term.trim().toLowerCase();
              return q ? list.filter(p => p.name.includes(q)) : list;
            })
          )
        ),
        catchError(err => {
          console.error(err);
          this.errorMsg = 'Failed to load data';
          return of<Poke[]>([]);
        }),
        tap(() => this.loading = false)
      )
      .subscribe(list => this.pokemons = list);

    this.searchPokemon('');
  }

  loadAll() {
    this.searchPokemon('');
  }

  searchPokemon(term: string) {
    this.search$.next(term);
  }

  private fetchAll() {
    if (this.allCache) return of(this.allCache);
    return this.http.get<{ results: Poke[] }>(this.allUrl).pipe(
      map(res => res.results),
      tap(list => this.allCache = list)
    );
  }
}
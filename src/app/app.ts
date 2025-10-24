import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { SearchComponent } from './components/search/search';
import { UserListComponent } from './components/user-list/user-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  searchTerm = '';

  onSearchChange(value: string) {
    this.searchTerm = value;
  }
}
import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list';
import { SearchComponent } from './components/search/search';
import { HeaderComponent } from './components/header/header';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'users', component: UserListComponent },
  { path: 'search', component: SearchComponent }
];
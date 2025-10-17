import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  title = 'About Our Team';
  mission = 'We build delightful software for everyone.';

  photoUrl = 'https://cdn-icons-png.flaticon.com/512/847/847969.png';
  isButtonDisabled = false;

  likes = 0;
  messageVisible = false;

  likeTeam() {
    this.likes++;
  }

  toggleMessage() {
    this.messageVisible = !this.messageVisible;
  }

  name = '';
  email = '';
  subscribed = false;

  subscribe() {
    if (this.email.trim() !== '') {
      this.subscribed = true;
    }
  }

  year = new Date().getFullYear();
}
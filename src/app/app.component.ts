import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dexter';

  subtitle = 'An Online Pokédex';

  storedTheme = 'theme-light';

  

  onThemeChanged(theme: string) {
    this.storedTheme = theme;
  }
    
}

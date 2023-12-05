import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dexter';

  subtitle = 'An Online Pokédex';

  storedTheme: string = 'theme-light';

  ngOnInit(): void {
    // Retrieve the theme from local storage or use a default theme
    this.storedTheme = localStorage.getItem('theme-color') || 'theme-light';
  }

  onThemeChanged(theme: string) {
    // Update the theme in local storage
    localStorage.setItem('theme-color', theme);
    this.storedTheme = theme;
  }
}

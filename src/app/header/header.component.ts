import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', ], // Use 'styleUrls' instead of 'styleUrl'
})
export class HeaderComponent implements OnInit {
  @Input() selectedTheme: string = 'theme-light';
  @Output() themeChanged: EventEmitter<string> = new EventEmitter<string>(); // Create an EventEmitter

  constructor() {}

  ngOnInit(): void {}

  setTheme(theme: string) {
    this.selectedTheme = theme;
    this.themeChanged.emit(this.selectedTheme); // Emit the theme value to the parent component
  }
}

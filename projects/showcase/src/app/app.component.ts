import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PluralizationLocalPipe } from '../../../ngs-plural/src/lib/pipes/pluralization-local.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PluralizationLocalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePrincipalComponent } from './home-principal/home-principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoRedeSocial';
}

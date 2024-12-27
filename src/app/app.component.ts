import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePrincipalComponent } from "./home-principal/home-principal.component";
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomePrincipalComponent, CadastroUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoRedeSocial';

  date: Date = new Date();
}

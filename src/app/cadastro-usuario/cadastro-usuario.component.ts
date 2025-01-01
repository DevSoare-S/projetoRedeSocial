import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: 'cadastro.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

    
}

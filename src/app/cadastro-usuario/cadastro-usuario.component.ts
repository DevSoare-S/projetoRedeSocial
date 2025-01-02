import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: 'cadastro.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  model = new Customer(null, '','','','',0)

  submited = false;

  onSubmit() {

    this.submited = true;

    alert('Registrado com sucesso')
  }
    
}

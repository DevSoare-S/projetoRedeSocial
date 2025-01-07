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

  showPassword: string = 'password';
  password: string = '';
  isTouched: boolean = false;

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.model.password);
  }

  get hasLowerCase(): boolean {
    return /[a-z]/.test(this.model.password);
  }

  get hasNumbers(): boolean {
    return /[0-9]/.test(this.model.password);
  }

  get caractersSpecials():boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.model.password);
  }

  get isValid(): boolean {
    return this.hasUpperCase && this.hasLowerCase && this.hasNumbers && this.caractersSpecials;
  }

  onTouch() {
    this.isTouched = true;
  }

  passwordShow(event: Event):void {
    event.preventDefault();
    this.showPassword = this.showPassword === 'password' ? 'text' : 'password'
  }

  onSubmit(event : Event):void {
    event.preventDefault();

      if(this.isValid == true) {
          alert('Cadastrado')
      }

      else {
        alert('Você deve inserir as informações corretamente.')
      }
  }
    
}

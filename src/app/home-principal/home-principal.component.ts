import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-home-principal',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.css'
})
export class HomePrincipalComponent {  

  model = new Customer(null, '', '');

  momentForm!: FormGroup;
  constructor() {}

  isVisible: boolean  = false;

  ngOnInit(): void {}
  

  submited = false;

  onSubmit() {

    this.submited = true;

    alert('Login efetuado com sucesso')

  }

}


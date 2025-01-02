import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { customers } from './customers';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, FormsModule ,ReactiveFormsModule],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {

  model = new customers ('')


  submited = false;

  ngOnInit(): void {}

  onSubmit() {

    this.submited = true;

    alert('Email enviado com sucesso')
  }
}

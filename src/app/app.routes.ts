import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

export const routes: Routes = [
    { path: 'cadastro', title: 'Cadastre-se', component: CadastroUsuarioComponent},
    { path: 'recuperarSenha', title: 'Esqueceu a senha', component: RecuperarSenhaComponent},
    { path: '', component: HomePrincipalComponent}
];


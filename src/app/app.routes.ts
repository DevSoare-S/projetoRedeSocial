import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';

export const routes: Routes = [
    { path: 'cadastro', title: 'Cadastre-se', component: CadastroUsuarioComponent},
    { path: '', component: HomePrincipalComponent}
];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRecetarioComponent } from './crear-recetario/crear-recetario.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {  
    path:'',
    component:CrearRecetarioComponent,
    title:"Messi_cooking"
    },
  {
    path:"log_in",
    component:LogInComponent,
    title:"messi_log_in"
  },
  {
    path:"sign_in",
    component: SignInComponent,
    title:"messi_register"
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

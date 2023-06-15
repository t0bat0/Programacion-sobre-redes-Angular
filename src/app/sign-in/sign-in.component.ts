import { Component } from '@angular/core';
import { ApiRequestService } from '../api-request.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  nombre: String = '';
  passw: String = '';
  constructor(private apiRequestService: ApiRequestService) {}

  sign_in() {
    console.log("llego")
    this.apiRequestService.Registro_Usuario(this.nombre, this.passw);
  }
}

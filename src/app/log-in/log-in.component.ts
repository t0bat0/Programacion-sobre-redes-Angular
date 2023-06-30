import { Component } from '@angular/core';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  acces: boolean = true;
  nombre: String = '';
  passw: String = '';
  constructor(private apiRequestService: ApiRequestService) {}

  log_in() {
    this.apiRequestService.Ingreso_Usuario(this.nombre, this.passw);
  }

  check_token() {
    if (localStorage.getItem('JWT_token') === '') {
      this.acces = true;
    } else {
      this.acces = false;
    }
  }
}

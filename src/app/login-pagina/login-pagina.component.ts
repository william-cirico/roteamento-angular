import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-pagina',
  templateUrl: './login-pagina.component.html',
  styleUrls: ['./login-pagina.component.css']
})
export class LoginPaginaComponent {
  constructor(public authService: AuthService) {}
}

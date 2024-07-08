import { Component } from '@angular/core';
import { ServiceCrudAuthService } from 'src/app/services/service-crud-auth.service';
import { ServiceCrudUserService } from 'src/app/services/service-crud-user.service';
import { Auth } from 'src/app/services/auth';
import { User } from '../user/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  user = new User('', '', '', '', '', 0);
  auth = new Auth('', '');
  constructor(
    private usersrv: ServiceCrudUserService,
    private authsrv: ServiceCrudAuthService
  ) {}
}

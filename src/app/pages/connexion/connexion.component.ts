import { Component } from '@angular/core';
import { ServiceCrudAuthService } from 'src/app/services/service-crud-auth.service';
import { ServiceCrudUserService } from 'src/app/services/service-crud-user.service';
import { Auth } from 'src/app/services/auth';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  user = new User('', '', '', '', '', 0);
  auth = new Auth('', '');
  login: string = '';
  mot_de_passe: string = '';

  constructor(
    private usersrv: ServiceCrudUserService,
    private authsrv: ServiceCrudAuthService,
    private router: Router
  ) {}

  Connexion() {
    this.auth.login = this.login;
    this.auth.mot_de_passe = this.mot_de_passe;

    this.authsrv.Login(this.auth).subscribe(
      (authResponse) => {
        this.usersrv.FindByMail(this.auth.login).subscribe(
          (userResponse) => {
            sessionStorage.setItem('user', JSON.stringify(userResponse));
            sessionStorage.setItem('auth', JSON.stringify(this.auth));
            console.log(userResponse);
            
            console.log(this.user);
            console.log(this.auth);
            this.router.navigate(['/user']); // Redirige vers la page utilisateur
          },
          (error) => {
            window.alert(
              'Erreur lors de la récupération des informations utilisateur'
            );
            console.error(error);
          }
        );
      },
      (error) => {
        window.alert('Login ou mot de passe incorrect');
        console.error(error);
      }
    );
  }
}

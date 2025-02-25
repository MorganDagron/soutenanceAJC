import { Component } from '@angular/core';
import { User } from '../user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCrudUserService } from 'src/app/services/service-crud-user.service';
import { ServiceCrudAuthService } from 'src/app/services/service-crud-auth.service';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  user = new User('', '', '', '', '', false);
  auth = new Auth('', '');
  rand = 'eeee';
  inscriptionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersrv: ServiceCrudUserService,
    private authsrv: ServiceCrudAuthService
  ) {
    this.inscriptionForm = this.fb.group({
      nom: [this.rand],
      prenom: [this.rand],
      mail: [this.rand],
      telephone: [this.rand],
      adresse_postale: [this.rand],
      password: [this.rand],
      confirmpassword: [this.rand],
    });
  }

  get telephone() {
    return this.inscriptionForm.get('telephone');
  }

  isInvalid() {
    return (
      this.telephone?.invalid &&
      (this.telephone?.dirty || this.telephone?.touched)
    );
  }

  register() {
    if (this.inscriptionForm.valid) {
      this.user.Nom = this.inscriptionForm.value.nom;
      this.user.Prenom = this.inscriptionForm.value.prenom;
      this.user.Mail = this.inscriptionForm.value.mail;
      this.user.Telephone = this.inscriptionForm.value.telephone;
      this.user.AdressePostale = this.inscriptionForm.value.adresse_postale;
      this.user.IsAdmin = false;
      this.auth.login = this.inscriptionForm.value.mail;
      this.auth.mot_de_passe = this.inscriptionForm.value.password;
      sessionStorage.setItem('user', JSON.stringify(this.user));
      sessionStorage.setItem('auth', JSON.stringify(this.auth));
      console.log(this.user);
      console.log(this.auth);
      this.authsrv.AddAuth(this.auth);
      this.usersrv.AddUser(this.user);

      this.inscriptionForm.reset();
    } else {
      this.inscriptionForm.reset();
      console.log('Form is invalid');
    }
  }
}

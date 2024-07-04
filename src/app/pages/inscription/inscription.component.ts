import { Component } from '@angular/core';
import { User } from '../user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  user = new User('', '', '', '');
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10),
        ],
      ],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
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
      this.user.nom = this.inscriptionForm.value.nom;
      this.user.prenom = this.inscriptionForm.value.prenom;
      this.user.email = this.inscriptionForm.value.email;
      this.user.telephone = this.inscriptionForm.value.telephone;
      console.log(this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}

import { Component } from '@angular/core';
import { User } from '../user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
      nom: ['', 
        //[Validators.required]
      ],
      prenom: ['', 
        //Validators.required
      ],
      email: ['', 
        //[Validators.required, Validators.email]
        ],
      telephone: [
        '',
        // [
        //   Validators.required,
        //   Validators.pattern('^[0-9]*$'),
        //   Validators.maxLength(10),
        //   Validators.minLength(10),
        // ],
      ],
      password: [
        '',
        // [
        //   Validators.required,
        //   Validators.minLength(6),
        //   Validators.maxLength(20),
        // ],
      ],
      confirmpassword: [
        '',
        // Validators.required,
        // [
        //   Validators.required,
        //   Validators.minLength(6),
        //   Validators.maxLength(20),
        // ],
      ],
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
      sessionStorage.setItem('user', JSON.stringify(this.user));
      console.log(this.user);
      this.inscriptionForm.reset();
    } else {
      this.inscriptionForm.reset();
      console.log('Form is invalid');
    }
  }
}

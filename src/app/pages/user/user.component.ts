import { Component } from '@angular/core';
import { User } from '../user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCrudUserService } from 'src/app/services/service-crud-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user = new User('', '', '', '');
  constructor(private srv: ServiceCrudUserService) {}
  ngOnInit(): void {
    let str = sessionStorage.getItem('user');
    this.user = JSON.parse(str as string);
    let id = this.user.id;
    let nom = this.user.nom;
    let prenom = this.user.prenom;
    let email = this.user.email;
    let telephone = this.user.telephone;
  }
  nom = '';
  prenom = '';
  email = '';
  telephone = '';
  id = 0;
  mettreAJour() {
    this.user.nom = this.nom;
    this.user.prenom = this.prenom;
    this.user.email = this.email;
    this.user.telephone = this.telephone;
    this.srv.UpdateUser(this.user);
  }
  deleteUser() {
    this.srv.DeleteUser(this.id);
    console.log(this.id);
    
  }
}

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
  id: number = 0;
  nom: string = '';
  prenom: string = '';
  email: string = '';
  telephone: string = '';
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

  deleteUser() {
    this.srv.DeleteUser(this.id);
  }
}

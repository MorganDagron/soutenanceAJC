import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { ServiceCrudUserService } from 'src/app/services/service-crud-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User = new User('', '', '', '', '', false);

  constructor(private usersrv: ServiceCrudUserService) {}

  ngOnInit(): void {
    const str = sessionStorage.getItem('user');
    if (str) {
      console.log('le STR : ' + str);
      this.user = JSON.parse(str);
      console.log('Utilisateur chargé :', this.user);

      // Ajoutez des logs pour vérifier les données
      console.log('Nom: ', this.user.Nom);
      console.log('Prenom: ', this.user.Prenom);
      console.log('Mail: ', this.user.Mail);
      console.log('Telephone: ', this.user.Telephone);
      console.log('Adresse Postale: ', this.user.AdressePostale);
    } else {
      console.error(
        'Aucune information utilisateur trouvée dans le sessionStorage'
      );
    }
  }

  deleteUser() {
    this.usersrv.DeleteUser(this.user.Mail).subscribe(
      (response) => {
        console.log('Utilisateur supprimé avec succès', response);
        // Ajoutez ici toute logique supplémentaire après la suppression
      },
      (error) => {
        console.error("Erreur lors de la suppression de l'utilisateur", error);
      }
    );
  }
}

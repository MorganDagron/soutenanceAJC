export class User {
  readonly id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  isAdmin: boolean = false;

  constructor(nom: string, prenom: string, email: string, telephone: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;
    this.isAdmin = false;
  }
}

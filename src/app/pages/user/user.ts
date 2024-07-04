export class User {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;

  constructor(nom: string, prenom: string, email: string, telephone: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;
  }
}

export class User {
  readonly id?: number;
  nom: string;
  prenom: string;
  mail: string;
  adresse_postale: string;
  telephone: string;
  isAdmin: number = 0;

  constructor(
    nom: string,
    prenom: string,
    mail: string,
    adresse_postale: string,
    telephone: string,
    isAdmin: number = 0
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.adresse_postale = adresse_postale;
    this.telephone = telephone;
    this.isAdmin = 0;
  }
}

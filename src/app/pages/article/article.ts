export class Article {
  nom: string;
  categorie: string;
  taille_id: number;
  matiere_id: number;

  constructor(
    nom: string,
    categorie: string,
    taille_id: number,
    matiere_id: number
  ) {
    this.nom = nom;
    this.categorie = categorie;
    this.taille_id = taille_id;
    this.matiere_id = matiere_id;
  }
}

export class Article {
  id: number;
  nom: string;
  categorie: string;
  taille_id: number;
  matiere_id: number;

  constructor(
    id: number,
    nom: string,
    categorie: string,
    taille_id: number,
    matiere_id: number
  ) {
    this.id = id;
    this.nom = nom;
    this.categorie = categorie;
    this.taille_id = taille_id;
    this.matiere_id = matiere_id;
  }
}

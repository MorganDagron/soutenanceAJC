export class BlogArticle {
  imageUrl: string;
  titre: string;
  contenu: string;
  creationDate: Date;
  categorie: string;

  constructor(
    imageUrl: string,
    titre: string,
    contenu: string,
    creationDate: Date,
    categorie: string
  ) {
    this.imageUrl = imageUrl;
    this.titre = titre;
    this.contenu = contenu;
    this.creationDate = creationDate;
    this.categorie = categorie;
  }
}

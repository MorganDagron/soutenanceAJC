import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  panier: any[] = [
    {
      "image": "https://picsum.photos/200",
      "nom": "Collier en perle blanche",
      "taille": "18 cm",
      "matiere": "Perle blanche",
      "prix": "100 €"
    },
    {
      "image": "https://picsum.photos/200",
      "nom": "Bague en diamant",
      "taille": "52",
      "matiere": "Diamant",
      "prix": "100 €"
    },
    {
      "image": "https://picsum.photos/200",
      "nom": "Anneau en rubis",
      "taille": "48",
      "matiere": "Rubis",
      "prix": "100 €"
    },
    {
      "image": "https://picsum.photos/200",
      "nom": "Collier en émeraude",
      "taille": "20 cm",
      "matiere": "Émeraude",
      "prix": "100 €"
    },
    {
      "image": "https://picsum.photos/200",
      "nom": "Boucle d'oreille en saphir",
      "taille": "5 mm",
      "matiere": "Saphir",
      "prix": "100 €"
    }
  ]
}

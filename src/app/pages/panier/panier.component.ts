import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  panier: any[] = [];

  // panier: any[] = [
  //   {
  //     "image": "https://picsum.photos/100",
  //     "nom": "Collier en perle blanche",
  //     "taille": "18 cm",
  //     "matiere": "Perle blanche",
  //     "prix": "100 €"
  //   },
  //   {
  //     "image": "https://picsum.photos/100",
  //     "nom": "Bague en diamant",
  //     "taille": "52",
  //     "matiere": "Diamant",
  //     "prix": "100 €"
  //   },
  //   {
  //     "image": "https://picsum.photos/100",
  //     "nom": "Anneau en rubis",
  //     "taille": "48",
  //     "matiere": "Rubis",
  //     "prix": "100 €"
  //   },
  //   {
  //     "image": "https://picsum.photos/100",
  //     "nom": "Collier en émeraude",
  //     "taille": "20 cm",
  //     "matiere": "Émeraude",
  //     "prix": "100 €"
  //   },
  //   {
  //     "image": "https://picsum.photos/100",
  //     "nom": "Boucle d'oreille en saphir",
  //     "taille": "5 mm",
  //     "matiere": "Saphir",
  //     "prix": "100 €"
  //   }
  // ]

  ngOnInit(): void {
    this.recupererPanier();
  }

  recupererPanier(): void {
    const panierData = sessionStorage.getItem('panier');
    if (panierData) {
      try {
        this.panier = JSON.parse(panierData);
        console.log('Panier récupéré:', this.panier);
      } catch (error) {
        console.error('Erreur de parsing JSON:', error);
        this.panier = [];
      }
    } else {
      console.log('Aucun panier trouvé');
    }
  }

  supprimerArticle(articleASupprimer: any): void {
    // Récupère le panier depuis le sessionStorage
    let panier = sessionStorage.getItem('panier');
    if (panier) {
      let panierArray = JSON.parse(panier);
      // Trouve l'index de l'article à supprimer
      const index = panierArray.findIndex((article: any) => article.id === articleASupprimer.id);
      if (index > -1) {
        // Supprime l'article du tableau
        panierArray.splice(index, 1);
        // Sauvegarde le nouveau panier dans le sessionStorage
        sessionStorage.setItem('panier', JSON.stringify(panierArray));
        // Met à jour le panier dans le composant
        this.panier = panierArray;
      }
    }
  }

  calculateTotalPrice(){
    let totalPrice = 0;
    for (let article of this.panier) {
      totalPrice += parseFloat(article.prix);
    }
    return totalPrice;
  }


}

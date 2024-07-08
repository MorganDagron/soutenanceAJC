import { Component } from '@angular/core';
import { Article } from '../article/article';
import { HttpClient } from '@angular/common/http';
import { ServiceCrudArticleService } from 'src/app/services/service-crud-article.service';
//import { SrvCrudArticleService } from '../article/srv-crud-article.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})


export class CollectionComponent {
  list: any;
  //list: Array<Article> =  [] ;
  listeBijouxJSON: any;

  listeBijoux = 
    [
      {
        "id": 1,
        "nom": "Collier de perles",
        "categorie": "Colliers",
        "taille": "18 cm",
        "matiere": "Perles et métal",
        "prix": 50.00
      },
      {
        "id": 2,
        "nom": "Anneau en or",
        "categorie": "Anneaux",
        "taille": "6 mm",
        "matiere": "Or",
        "prix": 100.00
      },
      {
        "id": 3,
        "nom": "Bijou à strass",
        "categorie": "Bijoux fantaisie",
        "taille": "Variable",
        "matiere": "Strass et métal",
        "prix": 30.00
      },
      {
        "id": 4,
        "nom": "Pendentif en cristal",
        "categorie": "Pendentifs",
        "taille": "5 cm",
        "matiere": "Cristal et métal",
        "prix": 80.00
      },
      {
        "id": 5,
        "nom": "Bague en argent",
        "categorie": "Bagues",
        "taille": "7 mm",
        "matiere": "Argent",
        "prix": 60.00
      },
      {
        "id": 6,
        "nom": "Collier en cuir",
        "categorie": "Colliers",
        "taille": "20 cm",
        "matiere": "Cuir",
        "prix": 40.00
      },
      {
        "id": 7,
        "nom": "Anneau en diamant",
        "categorie": "Anneaux",
        "taille": "5 mm",
        "matiere": "Diamant et métal",
        "prix": 200.00
      },
      {
        "id": 8,
        "nom": "Bijou en perles de rocailles",
        "categorie": "Bijoux fantaisie",
        "taille": "Variable",
        "matiere": "Perles de rocailles et métal",
        "prix": 25.00
      }
    ]

  constructor(private srv: ServiceCrudArticleService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.listeBijouxJSON = JSON.stringify(this.listeBijoux);
    console.log(this.listeBijouxJSON);
    
    this.srv.GetArticles().subscribe(
      (response) => { this.list=response; },
      (err) => { console.log("Erreur fetch articles") }

    );
  }

 

}

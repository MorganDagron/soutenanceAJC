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
  constructor(private srv: ServiceCrudArticleService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.srv.GetArticles().subscribe(
      (response) => { this.list=response; },
      (err) => { console.log("Erreur fetch articles") }

    );
  }

 

}

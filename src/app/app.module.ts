import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ObjLoaderService } from './pages/configurateur/obj-loader.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AproposComponent } from './pages/apropos/apropos.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticleComponent } from './pages/article/article.component';
import { UserComponent } from './pages/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanierComponent } from './pages/panier/panier.component';
import { ConfigurateurComponent } from './pages/configurateur/configurateur.component';
import { CollectionComponent } from './pages/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    AccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ArticleComponent,
    UserComponent,
    PanierComponent,
    ConfigurateurComponent,
    CollectionComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ObjLoaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}

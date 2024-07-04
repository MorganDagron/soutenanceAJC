import { Component } from '@angular/core';
import { BlogArticle } from './blog-article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  listArticles: BlogArticle[] = [
    new BlogArticle(
      './assets/img/blog1.jpeg',
      "Les tendances bijoux de l'été 2024",
      'Découvrez les tendances bijoux de cet été : des pièces colorées, des matériaux naturels et des designs audacieux pour égayer votre garde-robe estivale. Les perles et les pierres semi-précieuses sont particulièrement à la mode, tout comme les bijoux en coquillages.',
      new Date(),
      'Tendances'
    ),
    new BlogArticle(
      './assets/img/blog2.jpeg',
      'Comment choisir le parfait cadeau de bijoux',
      "Choisir un bijou pour quelqu'un peut être délicat. Voici quelques conseils pour vous aider : considérez le style personnel du destinataire, la qualité du matériau, et optez pour des pièces intemporelles. Les bijoux personnalisés, comme des gravures, ajoutent une touche spéciale.",
      new Date(),
      "Guide d'achat"
    ),
    new BlogArticle(
      './assets/img/blog3.jpeg',
      "L'histoire fascinante des bijoux anciens",
      "Les bijoux anciens portent en eux une richesse historique et culturelle immense. Des civilisations antiques comme l'Égypte, la Grèce et Rome ont laissé des trésors inestimables qui racontent des histoires de pouvoir, de beauté et de statut social.",
      new Date(),
      'Histoire'
    ),
    new BlogArticle(
      './assets/img/blog4.jpeg',
      'Entretien des bijoux en argent : conseils et astuces',
      "L'argent peut ternir avec le temps, mais un entretien régulier peut garder vos bijoux éclatants. Utilisez des produits de nettoyage spécifiques pour l'argent, évitez l'exposition à des produits chimiques agressifs et stockez vos pièces correctement pour prévenir l'oxydation.",
      new Date(),
      'Entretien'
    ),
    new BlogArticle(
      './assets/img/blog5.jpeg',
      'Les bienfaits des pierres précieuses sur la santé',
      "Certaines pierres précieuses sont réputées pour leurs bienfaits sur la santé. Par exemple, l'améthyste est censée favoriser la relaxation et le quartz rose est souvent associé à l'amour et à la guérison émotionnelle. Découvrez comment choisir et utiliser ces pierres au quotidien.",
      new Date(),
      'Bien-être'
    ),
    new BlogArticle(
      './assets/img/blog6.jpeg',
      "Bijoux faits main : l'artisanat au service de l'élégance",
      'Les bijoux faits main représentent une alternative unique et personnalisée aux productions de masse. Chaque pièce est unique, réalisée avec soin par des artisans passionnés. Apprenez pourquoi opter pour des bijoux artisanaux peut être une excellente décision.',
      new Date(),
      'Artisanat'
    ),
    new BlogArticle(
      './assets/img/blog7.jpeg',
      'Les métaux précieux : or, argent et platine',
      "L'or, l'argent et le platine sont les métaux précieux les plus utilisés en bijouterie. Chacun a ses propres caractéristiques et avantages. Découvrez les différences entre ces métaux et comment choisir celui qui convient le mieux à vos bijoux.",
      new Date(),
      'Matériaux'
    ),
    new BlogArticle(
      './assets/img/blog8.jpeg',
      'Le retour des bijoux vintage : un style intemporel',
      "Les bijoux vintage font un grand retour sur la scène de la mode. Des pièces des années 1920 aux années 1980, ces bijoux apportent une touche d'élégance et de nostalgie à toute tenue. Apprenez comment intégrer ces trésors vintage dans votre style moderne.",
      new Date(),
      'Mode'
    ),
    new BlogArticle(
      './assets/img/blog9.jpeg',
      'Les bijoux éthiques et durables : un choix responsable',
      "Opter pour des bijoux éthiques et durables est un choix important pour la planète et les communautés locales. Découvrez comment les matériaux recyclés, les pratiques de travail équitables et les processus de fabrication respectueux de l'environnement peuvent faire la différence.",
      new Date(),
      'Éthique'
    ),
  ];
  activeCategories: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleActive(event: Event): void {
    const button = event.target as HTMLButtonElement;
    const category = button.value;

    if (this.activeCategories.includes(category)) {
      this.activeCategories = this.activeCategories.filter(
        (cat) => cat !== category
      );
    } else {
      this.activeCategories.push(category);
    }
  }

  isActive(category: string): boolean {
    return this.activeCategories.includes(category);
  }

  getFilteredArticles(): any[] {
    if (this.activeCategories.length === 0) {
      return this.listArticles;
    }
    return this.listArticles.filter((article) =>
      this.activeCategories.includes(article.categorie)
    );
  }
}

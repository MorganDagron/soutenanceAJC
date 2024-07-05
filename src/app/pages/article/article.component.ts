import { AfterViewInit, Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {}

// export class ArticleComponent implements AfterViewInit {

//   constructor(private cdr: ChangeDetectorRef) {}

//   ngAfterViewInit(): void {
//     const items: NodeListOf<Element> = document.querySelectorAll('.carousel .carousel-item');

//     items.forEach((el: Element) => {
//       const minPerSlide = 3;
//       let next: Element | null = el.nextElementSibling;

//       for (let i = 1; i < minPerSlide; i++) {
//         if (!next) {
//           next = items[0];
//         }

//         const cloneChild: Node = next.cloneNode(true);
//         if (cloneChild.firstChild) {
//           el.appendChild(cloneChild.firstChild);
//         }
//         next = next.nextElementSibling;
//       }
//     });

//     // Trigger change detection
//     this.cdr.detectChanges();
//   }
// }
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  portfolio$!: Observable<import('../models/portfolio.model').Portfolio>;
  scrolled = false;
  private scrollListener!: () => void;
  private isBrowser = false;

  constructor(
    private portfolioService: PortfolioService,
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.portfolio$ = this.portfolioService.portfolio$;
    
    if (this.isBrowser) {
      this.scrollListener = () => {
        this.scrolled = window.scrollY > 50;
      };
      window.addEventListener('scroll', this.scrollListener);
    }

    if (this.isBrowser) {
      // safe to use window here, e.g.:
      // const w = window.innerWidth;
      // ...existing browser-only init...
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }


}

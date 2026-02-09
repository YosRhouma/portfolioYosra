import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../models/portfolio.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  portfolio!: Portfolio;
  scrolled = false;
  private scrollListener!: () => void;
  private isBrowser = false;

  constructor(
    private portfolioService: PortfolioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.portfolio = this.portfolioService.getPortfolio();
    
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

  // helper to safely access window
  private safeWindow(): Window | undefined {
    return this.isBrowser ? window : undefined;
  }

  // example of replacing direct window usage
  someMethodThatUsedWindow(): void {
    const w = this.safeWindow();
    if (!w) return;
    // use w instead of window, e.g. w.scrollTo(...)
  }
}

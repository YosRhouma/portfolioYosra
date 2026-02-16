import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Experience } from '../models/portfolio.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];
  expandedId: string | null = null;
  portfolio$!: Observable<Portfolio>;

  constructor(
    private portfolioService: PortfolioService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    // Initialize portfolio$ and subscribe to get translated experiences
    this.portfolio$ = this.portfolioService.portfolio$;
    this.portfolio$.subscribe(portfolio => {
      this.experiences = portfolio?.experiences || [];
    });
  }

  private loadExperiences(): void {
    this.experiences = this.portfolioService.getTranslatedExperiences();
  }

  toggleExpanded(id: string): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  formatDate(date: Date): string {
    const lang = this.translationService.getCurrentLanguage();
    const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
    return new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
  }

  translate(key: string, defaultValue: string = ''): string {
    return this.translationService.translate(key, defaultValue);
  }
}


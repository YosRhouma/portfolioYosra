import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Experience } from '../models/portfolio.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  expandedId: string | null = null;
  readonly portfolio$;

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly translationService: TranslationService
  ) {
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  toggleExpanded(id: string): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  formatDate(date: Date): string {
    const lang = this.translationService.getCurrentLanguage();
    const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
    return new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long' });
  }

  trackById(_: number, experience: Experience): string {
    return experience.id;
  }
}


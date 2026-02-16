import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  portfolio$!: Observable<import('../models/portfolio.model').Portfolio>;

  constructor(
    private portfolioService: PortfolioService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  translate(key: string, defaultValue: string = ''): string {
    return this.translationService.translate(key, defaultValue);
  }
}
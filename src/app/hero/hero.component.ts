import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  readonly portfolio$;

  constructor(private readonly portfolioService: PortfolioService) {
    this.portfolio$ = this.portfolioService.portfolio$;
  }
}

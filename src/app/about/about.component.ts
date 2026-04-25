import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly portfolio$;

  constructor(private readonly portfolioService: PortfolioService) {
    this.portfolio$ = this.portfolioService.portfolio$;
  }
}

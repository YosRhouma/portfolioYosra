import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  readonly currentLanguage$;

  constructor(private readonly translationService: TranslationService) {
    this.currentLanguage$ = this.translationService.getCurrentLanguage$();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (typeof window === 'undefined') return;
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(id: string): void {
    this.closeMobileMenu();
    if (typeof document === 'undefined') {
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }
}

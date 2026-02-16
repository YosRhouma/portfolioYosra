import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLanguage$!: Observable<Language>;

  constructor(private translationService: TranslationService) {
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
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  translate(key: string, defaultValue: string = ''): string {
    return this.translationService.translate(key, defaultValue);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentLanguage$ = new BehaviorSubject<Language>('en');
  private translations: Record<Language, Record<string, any>> = {
    en: {},
    fr: {}
  };
  private translationsLoaded = false;
  private isBrowser: boolean;

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      this.loadTranslations();
      
      const savedLanguage = localStorage.getItem('portfolio-language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
        this.currentLanguage$.next(savedLanguage);
      }
    } else {
      // Server: mark as loaded with empty translations to prevent errors
      this.translationsLoaded = true;
    }
  }

  private async loadTranslations(): Promise<void> {
    try {
      // Use absolute paths with leading slash for both browser and server
      const [enResponse, frResponse] = await Promise.all([
        fetch('/assets/i18n/en.json'),
        fetch('/assets/i18n/fr.json')
      ]);

      if (!enResponse.ok || !frResponse.ok) {
        throw new Error(`Failed to fetch translations: en.ok=${enResponse.ok}, fr.ok=${frResponse.ok}`);
      }

      this.translations['en'] = await enResponse.json();
      this.translations['fr'] = await frResponse.json();
      this.translationsLoaded = true;
    } catch (error) {
      console.error('Error loading translations:', error);
      // Set default empty objects to prevent errors
      this.translations['en'] = {};
      this.translations['fr'] = {};
      this.translationsLoaded = true;
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage$.value;
  }

  getCurrentLanguage$(): Observable<Language> {
    return this.currentLanguage$.asObservable();
  }

  setLanguage(language: Language): void {
    this.currentLanguage$.next(language);
    if (this.isBrowser) {
      localStorage.setItem('portfolio-language', language);
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.getCurrentLanguage() === 'en' ? 'fr' : 'en';
    this.setLanguage(newLanguage);
  }

  translate(key: string, defaultValue: string = ''): string {
    if (!this.translationsLoaded) {
      return defaultValue;
    }
    
    const lang = this.getCurrentLanguage();
    const translation = this.getNestedTranslation(this.translations[lang], key);
    return translation || defaultValue;
  }

  private getNestedTranslation(obj: any, key: string): string | undefined {
    const keys = key.split('.');
    let result = obj;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return undefined;
      }
    }

    return typeof result === 'string' ? result : undefined;
  }

  // Return any value (string or object) for nested translation keys
  getObject(key: string, defaultValue: any = undefined): any {
    if (!this.translationsLoaded) {
      return defaultValue;
    }

    const lang = this.getCurrentLanguage();
    const result = this.getNestedObject(this.translations[lang], key);
    return result === undefined ? defaultValue : result;
  }

  private getNestedObject(obj: any, key: string): any {
    const keys = key.split('.');
    let result = obj;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return undefined;
      }
    }

    return result;
  }
}



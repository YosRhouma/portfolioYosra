import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly currentLanguageSubject = new BehaviorSubject<Language>('en');
  private readonly translations: Record<Language, Record<string, unknown>> = {
    en: {},
    fr: {}
  };
  private translationsLoaded = false;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.isBrowser) {
      this.translationsLoaded = true;
      return;
    }

    const savedLanguage = localStorage.getItem('portfolio-language') as Language | null;
    if (savedLanguage === 'en' || savedLanguage === 'fr') {
      this.currentLanguageSubject.next(savedLanguage);
    }

    void this.loadTranslations();
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  getCurrentLanguage$(): Observable<Language> {
    return this.currentLanguageSubject.asObservable();
  }

  setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language);

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
    return translation ?? defaultValue;
  }

  getObject<T>(key: string, defaultValue?: T): T | undefined {
    if (!this.translationsLoaded) {
      return defaultValue;
    }

    const lang = this.getCurrentLanguage();
    const result = this.getNestedObject(this.translations[lang], key);
    return (result === undefined ? defaultValue : result) as T | undefined;
  }

  private async loadTranslations(): Promise<void> {
    try {
      const [enResponse, frResponse] = await Promise.all([
        fetch('/assets/i18n/en.json'),
        fetch('/assets/i18n/fr.json')
      ]);

      if (!enResponse.ok || !frResponse.ok) {
        throw new Error(`Failed to fetch translations: en.ok=${enResponse.ok}, fr.ok=${frResponse.ok}`);
      }

      this.translations.en = await enResponse.json();
      this.translations.fr = await frResponse.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      this.translations.en = {};
      this.translations.fr = {};
    } finally {
      this.translationsLoaded = true;
      this.currentLanguageSubject.next(this.currentLanguageSubject.value);
    }
  }

  private getNestedTranslation(obj: unknown, key: string): string | undefined {
    const result = this.getNestedObject(obj, key);
    return typeof result === 'string' ? result : undefined;
  }

  private getNestedObject(obj: unknown, key: string): unknown {
    const keys = key.split('.');
    let result = obj;

    for (const currentKey of keys) {
      if (result && typeof result === 'object' && currentKey in result) {
        result = (result as Record<string, unknown>)[currentKey];
      } else {
        return undefined;
      }
    }

    return result;
  }
}

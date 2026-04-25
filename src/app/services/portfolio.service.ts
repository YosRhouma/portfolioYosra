import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import { Experience, Portfolio, Project } from '../models/portfolio.model';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly portfolioSubject: BehaviorSubject<Portfolio>;
  readonly portfolio$;

  constructor(private readonly translationService: TranslationService) {
    this.portfolioSubject = new BehaviorSubject<Portfolio>(this.buildTranslatedPortfolio());
    this.portfolio$ = this.portfolioSubject.asObservable();

    this.translationService.getCurrentLanguage$().subscribe(() => {
      this.portfolioSubject.next(this.buildTranslatedPortfolio());
    });
  }

  private buildTranslatedPortfolio(): Portfolio {
    const translated = structuredClone(PORTFOLIO_DATA);

    const personalInfo = this.translationService.getObject<Portfolio['personalInfo']>('serviceData.personalInfo');
    if (personalInfo) {
      translated.personalInfo = {
        ...translated.personalInfo,
        ...personalInfo
      };
    }

    const aboutSummary = this.translationService.getObject<string>('serviceData.aboutSummary');
    if (aboutSummary) {
      translated.about.summary = aboutSummary;
    }

    const highlights = this.toStringArray(this.translationService.getObject('serviceData.highlights'));
    if (highlights) {
      translated.about.highlights = highlights;
    }

    translated.experiences = translated.experiences.map((experience, index) => {
      const translatedExperience = this.translationService.getObject<Partial<Experience>>(
        `serviceData.experiences.exp${index + 1}`
      );

      if (!translatedExperience) {
        return experience;
      }

      return {
        ...experience,
        company: translatedExperience.company ?? experience.company,
        position: translatedExperience.position ?? experience.position,
        description: translatedExperience.description ?? experience.description,
        location: translatedExperience.location ?? experience.location,
        achievements: this.toStringArray(translatedExperience.achievements) ?? experience.achievements
      };
    });

    translated.projects = translated.projects.map((project, index) => {
      const translatedProject = this.translationService.getObject<Partial<Project>>(
        `serviceData.projects.proj${index + 1}`
      );

      if (!translatedProject) {
        return project;
      }

      return {
        ...project,
        title: translatedProject.title ?? project.title,
        description: translatedProject.description ?? project.description,
        shortDescription: translatedProject.shortDescription ?? project.shortDescription,
        context: translatedProject.context ?? project.context,
        role: translatedProject.role ?? project.role,
        features: this.toStringArray(translatedProject.features) ?? project.features
      };
    });

    const languages = this.translationService.getObject<Array<{ language: string }>>('serviceData.languages');
    if (languages?.length) {
      translated.languages = languages;
    }

    return translated;
  }

  private toStringArray(value: unknown): string[] | undefined {
    if (Array.isArray(value)) {
      return value.filter((item): item is string => typeof item === 'string');
    }

    if (value && typeof value === 'object') {
      return Object.values(value).filter((item): item is string => typeof item === 'string');
    }

    return undefined;
  }
}

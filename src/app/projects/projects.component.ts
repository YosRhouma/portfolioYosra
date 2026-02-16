import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Project } from '../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  currentImageIndex: { [key: string]: number } = {};
  expandedProject: string | null = null;
  portfolio$!: Observable<Portfolio>;

  constructor(
    private portfolioService: PortfolioService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    // Initialize portfolio$ and subscribe to translated portfolio to update projects
    this.portfolio$ = this.portfolioService.portfolio$;
    this.portfolio$.subscribe(portfolio => {
      this.projects = portfolio?.projects || [];
      this.projects.forEach(project => {
        if (!(project.id in this.currentImageIndex)) {
          this.currentImageIndex[project.id] = 0;
        }
      });
    });
  }

  private loadProjects(): void {
    this.projects = this.portfolioService.getTranslatedProjects();
    this.projects.forEach(project => {
      this.currentImageIndex[project.id] = 0;
    });
  }

  nextImage(projectId: string): void {
    const project = this.projects.find(p => p.id === projectId);
    if (project && project.images.length > 0) {
      this.currentImageIndex[projectId] = (this.currentImageIndex[projectId] + 1) % project.images.length;
    }
  }

  prevImage(projectId: string): void {
    const project = this.projects.find(p => p.id === projectId);
    if (project && project.images.length > 0) {
      this.currentImageIndex[projectId] = (this.currentImageIndex[projectId] - 1 + project.images.length) % project.images.length;
    }
  }

  goToImage(projectId: string, index: number): void {
    this.currentImageIndex[projectId] = index;
  }

  getCurrentImage(projectId: string): string {
    const project = this.projects.find(p => p.id === projectId);
    if (project && project.images.length > 0) {
      return project.images[this.currentImageIndex[projectId]];
    }
    return '';
  }

  toggleExpanded(projectId: string): void {
    this.expandedProject = this.expandedProject === projectId ? null : projectId;
  }

  isExpanded(projectId: string): boolean {
    return this.expandedProject === projectId;
  }

  translate(key: string, defaultValue: string = ''): string {
    return this.translationService.translate(key, defaultValue);
  }
}
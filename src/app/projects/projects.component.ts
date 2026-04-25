import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { Project } from '../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  currentImageIndex: Record<string, number> = {};
  expandedProject: string | null = null;
  readonly portfolio$;

  constructor(private readonly portfolioService: PortfolioService) {
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  nextImage(project: Project): void {
    if (project.images.length === 0) {
      return;
    }

    const currentIndex = this.getImageIndex(project.id);
    this.currentImageIndex[project.id] = (currentIndex + 1) % project.images.length;
  }

  prevImage(project: Project): void {
    if (project.images.length === 0) {
      return;
    }

    const currentIndex = this.getImageIndex(project.id);
    this.currentImageIndex[project.id] = (currentIndex - 1 + project.images.length) % project.images.length;
  }

  goToImage(projectId: string, index: number): void {
    this.currentImageIndex[projectId] = index;
  }

  getCurrentImage(project: Project): string {
    return project.images[this.getImageIndex(project.id)] ?? '';
  }

  toggleExpanded(projectId: string): void {
    this.expandedProject = this.expandedProject === projectId ? null : projectId;
  }

  isExpanded(projectId: string): boolean {
    return this.expandedProject === projectId;
  }

  trackById(_: number, project: Project): string {
    return project.id;
  }

  private getImageIndex(projectId: string): number {
    if (!(projectId in this.currentImageIndex)) {
      this.currentImageIndex[projectId] = 0;
    }

    return this.currentImageIndex[projectId];
  }
}

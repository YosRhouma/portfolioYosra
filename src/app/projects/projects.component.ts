import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { Project } from '../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  currentImageIndex: { [key: string]: number } = {};

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    // Initialize image carousel index for each project
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
}
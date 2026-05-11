import { bootstrapApplication } from '@angular/platform-browser';
import { inject } from '@vercel/analytics';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Initialize Vercel Web Analytics
// In development mode, events will be logged to console
// In production mode, events will be sent to Vercel
inject({ mode: 'auto' });

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

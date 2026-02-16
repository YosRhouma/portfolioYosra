import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { PortfolioService } from '../services/portfolio.service';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  portfolio$!: Observable<Portfolio>;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private translationService: TranslationService
    , private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    // initialize portfolio$ for template usage
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.emailService.sendEmail(this.contactForm.value).then(
      (response) => {
        this.successMessage = this.translationService.translate('contact.successMessage', 'Message sent successfully!');
        this.contactForm.reset();
        this.submitted = false;
        this.loading = false;
        setTimeout(() => { 
          this.successMessage = '';
        }, 5000);
      },
      (error) => {
        console.error('Error details:', error);
        this.errorMessage = this.translationService.translate('contact.errorMessage', 'Error sending message.');
        this.loading = false;
      }
    );
  }

  get f() {
    return this.contactForm.controls;
  }
}
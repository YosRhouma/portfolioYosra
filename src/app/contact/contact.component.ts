import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { TranslationService } from '../services/translation.service';
import { TranslatePipe } from '../pipes/translate.pipe';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  readonly portfolio$;
  private successMessageTimeoutId?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly emailService: EmailService,
    private readonly translationService: TranslationService,
    private readonly portfolioService: PortfolioService
  ) {
    this.portfolio$ = this.portfolioService.portfolio$;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    if (this.successMessageTimeoutId) {
      clearTimeout(this.successMessageTimeoutId);
    }
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      await this.emailService.sendEmail(this.contactForm.getRawValue());
      this.successMessage = this.translationService.translate(
        'contact.successMessage',
        'Message sent successfully!'
      );
      this.contactForm.reset();
      this.submitted = false;
      this.scheduleSuccessMessageClear();
    } catch (error) {
      console.error('Error details:', error);
      this.errorMessage = this.translationService.translate(
        'contact.errorMessage',
        'Error sending message.'
      );
    } finally {
      this.loading = false;
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  private scheduleSuccessMessageClear(): void {
    if (this.successMessageTimeoutId) {
      clearTimeout(this.successMessageTimeoutId);
    }

    this.successMessageTimeoutId = setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}

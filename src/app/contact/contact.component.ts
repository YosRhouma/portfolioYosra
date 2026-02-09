import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
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
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.emailService.sendEmail(this.contactForm.value).then(
      (response) => {
        this.successMessage = 'Message envoyé avec succès! Je vous répondrai bientôt.';
        this.contactForm.reset();
        this.loading = false;
        setTimeout(() => {
          this.successMessage = '';
          this.submitted = false;
        }, 5000);
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
        this.loading = false;
        console.error('Error sending email:', error);
      }
    );
  }

  get f() {
    return this.contactForm.controls;
  }
}

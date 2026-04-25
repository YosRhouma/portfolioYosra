import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly publicKey: string;
  private readonly serviceId: string;
  private readonly templateId: string;

  constructor() {
    this.publicKey = environment.emailJsPublicKey;
    this.serviceId = environment.emailJsServiceId;
    this.templateId = environment.emailJsTemplateId;

    if (this.publicKey && this.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.publicKey);
    }
  }

  sendEmail(formData: ContactForm): Promise<unknown> {
    return emailjs.send(this.serviceId, this.templateId, {
      name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  }
}

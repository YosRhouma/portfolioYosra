import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

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
  private publicKey: string | undefined;
  private serviceId: string | undefined;
  private templateId: string | undefined;

  constructor() {
    // Do not access browser globals when running in SSR / node environment
    if (typeof window === 'undefined') return;

    // Vite exposes env vars as import.meta.env.VITE_*
    // Use a safe any cast to avoid TS issues in this file
    const env = (import.meta as any).env || {};
    this.publicKey = env.VITE_EMAILJS_PUBLIC_KEY || env.NG_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    this.serviceId = env.VITE_EMAILJS_SERVICE_ID || env.NG_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    this.templateId = env.VITE_EMAILJS_TEMPLATE_ID || env.NG_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

    // Initialize EmailJS in the browser
    try {
      if (this.publicKey) {
        emailjs.init(this.publicKey);
      }
    } catch (e) {
      // swallow initialization errors in environments where EmailJS cannot run
      // console.warn('EmailJS init failed', e);
    }
  }

  sendEmail(formData: ContactForm): Promise<any> {
    const templateParams = {
      to_email: 'youssraarhouma@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    const service = this.serviceId || 'YOUR_SERVICE_ID';
    const template = this.templateId || 'YOUR_TEMPLATE_ID';
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('Email sending is not available in this environment'));
    }

    return emailjs.send(service, template, templateParams);
  }
}

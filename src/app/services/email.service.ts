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
  private publicKey: string;
  private serviceId: string;
  private templateId: string;

  constructor() {
    this.publicKey = environment.emailJsPublicKey;
    this.serviceId = environment.emailJsServiceId;
    this.templateId = environment.emailJsTemplateId;

    if (this.publicKey && this.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(this.publicKey);
    }
  }

  sendEmail(formData: ContactForm): Promise<any> {
    // 1. Créer un formulaire HTML dynamique
    const form = document.createElement('form');
    
    // 2. Ajouter les champs cachés (les noms DOIVENT correspondre au template)
    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';           // ⚠️ DOIT correspondre au template
    nameInput.value = formData.name;
    form.appendChild(nameInput);
    
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'from_email';    // ⚠️ DOIT correspondre au template
    emailInput.value = formData.email;
    form.appendChild(emailInput);
    
    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = 'subject';     // ⚠️ DOIT correspondre au template
    subjectInput.value = formData.subject;
    form.appendChild(subjectInput);
    
    const messageInput = document.createElement('input');
    messageInput.type = 'hidden';
    messageInput.name = 'message';     // ⚠️ DOIT correspondre au template
    messageInput.value = formData.message;
    form.appendChild(messageInput);
    
    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'time';           // ⚠️ DOIT correspondre au template
    timeInput.value = new Date().toLocaleString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    form.appendChild(timeInput);

    // 3. Ajouter temporairement le formulaire au DOM
    document.body.appendChild(form);

    // 4. Envoyer avec sendForm() au lieu de send()
    return emailjs.sendForm(this.serviceId, this.templateId, form)
      .then((response) => {
        // Nettoyer : retirer le formulaire du DOM
        document.body.removeChild(form);
        return response;
      })
      .catch((error) => {
        console.error('Erreur envoi email:', error);
        // Nettoyer même en cas d'erreur
        if (form.parentNode) {
          document.body.removeChild(form);
        }
        throw error;
      });
  }
}
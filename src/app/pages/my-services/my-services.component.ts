import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'minalu-services',
  imports: [CommonModule, FormsModule],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {
  private readonly email = 'minaluemesele@gmail.com';
  private readonly whatsappNumber = '251710208817';
  private readonly telegramUsername = 'mina_lue';

  readonly services = [
    {
      name: 'Full Stack Application Development',
      description: 'End-to-end product development across frontend, backend, APIs, databases, and deployment workflows.'
    },
    {
      name: 'Landing Pages Design and Development',
      description: 'Conversion-focused landing pages with clear messaging, responsive UI, and modern implementation.'
    },
    {
      name: 'Automated Workflow Applications',
      description: 'Custom workflow systems that automate repetitive operations, approvals, and business process coordination.'
    }
  ];

  request = {
    name: '',
    email: '',
    company: '',
    service: this.services[0].name,
    timeline: '',
    budget: '',
    details: ''
  };

  isFormOpen = false;

  openServiceRequestForm(serviceName: string): void {
    this.request.service = serviceName;
    this.isFormOpen = true;

    if (typeof document !== 'undefined') {
      setTimeout(() => {
        document.getElementById('service-request-form')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 0);
    }
  }

  closeServiceRequestForm(): void {
    this.isFormOpen = false;
  }

  get requestMailtoLink(): string {
    const subject = `Service Request: ${this.request.service}`;
    const body = this.requestMessage;

    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  get requestWhatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.requestMessage)}`;
  }

  get requestTelegramLink(): string {
    return `https://t.me/${this.telegramUsername}?text=${encodeURIComponent(this.requestMessage)}`;
  }

  private get requestMessage(): string {
    return [
      'Hi Minalu,',
      '',
      `I would like to request your "${this.request.service}" service.`,
      '',
      'Client details:',
      `- Name: ${this.request.name || '[Not provided]'}`,
      `- Email: ${this.request.email || '[Not provided]'}`,
      `- Company/Client: ${this.request.company || '[Not provided]'}`,
      `- Timeline: ${this.request.timeline || '[Not provided]'}`,
      `- Budget: ${this.request.budget || '[Not provided]'}`,
      '',
      'Project details:',
      this.request.details || '[Not provided]',
      '',
      'Best regards,',
      this.request.name || '[Your Name]'
    ].join('\n');
  }
}

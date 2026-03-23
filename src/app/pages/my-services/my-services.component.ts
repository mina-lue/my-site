import { Component } from '@angular/core';

@Component({
  selector: 'minalu-services',
  imports: [],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {
  private readonly email = 'meseminalu@gmail.com';

  getServiceRequestLink(serviceName: string): string {
    const subject = `Service Request: ${serviceName}`;
    const body = [
      'Hi Minalu,',
      '',
      `I would like to request your "${serviceName}" service.`,
      '',
      'Project details:',
      '- Company/Client:',
      '- Goal:',
      '- Scope:',
      '- Timeline:',
      '- Budget:',
      '',
      'Please let me know your availability and next steps.',
      '',
      'Best regards,',
      '- Your Name'
    ].join('\n');

    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}

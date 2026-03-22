import { Component } from '@angular/core';
import { MyPathComponent } from "../../components/my-path/my-path.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperiencesComponent } from "../experiences/experiences.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MyServicesComponent } from "../my-services/my-services.component";
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  imports: [MyPathComponent, ProjectsComponent, ExperiencesComponent, AboutMeComponent, MyServicesComponent, ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

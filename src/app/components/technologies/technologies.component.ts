import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from "../../services/collaborateur.service";
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any;

  constructor(private collaborateurService: CollaborateurService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies() {
    this.collaborateurService.getTechnologies().subscribe(data => {
      this.technologies = data;
    });
  }
}

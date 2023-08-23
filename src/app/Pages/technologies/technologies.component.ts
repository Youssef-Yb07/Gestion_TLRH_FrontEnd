import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from "../../services/collaborateur.service";
import { ActivatedRoute } from '@angular/router';
interface SalaryData {
  name: string;
  value: number;
}
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any[];
  collaborateurId: number;

  constructor(private collaborateurService: CollaborateurService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("hii");
    this.route.params.subscribe(params => {
      console.log("hii");
      this.collaborateurId = +params['id']; 

      this.collaborateurService.getTechnologies(this.collaborateurId).subscribe((data: Map<number, number>) => {
        this.technologies = Object.entries(data).map(([year, salary]) => ({
          name: year.toString(),
          value: salary
        }));
        console.log(this.technologies);
      });
    });
  }
}
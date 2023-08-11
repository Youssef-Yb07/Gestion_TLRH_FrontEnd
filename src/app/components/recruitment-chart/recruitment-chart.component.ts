import { Component } from '@angular/core';
import { CollaborateurService } from 'src/app/services/collaborateur.service';

@Component({
  selector: 'app-recruitment-chart',
  templateUrl: './recruitment-chart.component.html',
  styleUrls: ['./recruitment-chart.component.css']
})
export class RecruitmentChartComponent {
  recruitmentData: any;

  constructor(private collaborateurService : CollaborateurService) { }

  ngOnInit(): void {
    this.collaborateurService.getRecruitmentEvolution().subscribe(data => {
      this.recruitmentData = Object.entries(data).map(([year, count]) => ({ name: year, value: count }));
    });
  }
}

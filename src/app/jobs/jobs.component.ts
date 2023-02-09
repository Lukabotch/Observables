import { Component } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  proffessions: string[] = []
  constructor(private jobService: JobService) {}
  ngOnInit() {
    this.jobService
      .getPeople(['Lawyer', 'DEA Agent', 'Chemist'])
      .subscribe((x) => this.proffessions?.push(x));
  }
}

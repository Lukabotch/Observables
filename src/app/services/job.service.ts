import { Injectable } from '@angular/core';
import { Job, Person } from 'src/app/models/jobs.model';
import {
  concatMap,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  of,
  toArray,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobs: Job[] = [
    {
      id: 1,
      name: 'Lawyer',
    },
    {
      id: 2,
      name: 'Doctor',
    },
    {
      id: 3,
      name: 'Chemist',
    },
    {
      id: 4,
      name: 'Architect',
    },
    {
      id: 5,
      name: 'DEA Agent',
    },
    {
      id: 6,
      name: 'Dealer',
    },
  ];
  people: Person[] = [
    {
      id: 1,
      jobId: 1,
      name: 'Saul',
      lastname: 'Goodman',
    },
    {
      id: 2,
      jobId: 2,
      name: 'Willy',
      lastname: 'Wonka',
    },
    {
      id: 3,
      jobId: 3,
      name: 'Walter',
      lastname: 'White',
    },
    {
      id: 4,
      jobId: 6,
      name: 'Jesse',
      lastname: 'Pinkman',
    },
    {
      id: 5,
      jobId: 5,
      name: 'Hank',
      lastname: 'Schrader',
    },
    {
      id: 6,
      jobId: 5,
      name: 'Tuco',
      lastname: 'Salamanca',
    },
  ];
  getPeople(jobNames: string[]): Observable<string> {
    return from(this.jobs).pipe(
      concatMap((job) => {
        if (jobNames.includes(job.name)) {
          const person = this.people.filter((p) => p.jobId === job.id);
          return of(
            ...person.map((x) => `${x.name} ${x.lastname} is a ${job.name}`)
          );
        }
        return of();
      })
    );
  }
  constructor() {}
}

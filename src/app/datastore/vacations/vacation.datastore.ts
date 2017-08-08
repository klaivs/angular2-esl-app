import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vacation } from './vacation';

export class VacationDataStore implements InMemoryDbService {
  createDb() {
    const vacations: Vacation[] = [
    {
        id: 1, 
        userId: 1, 
        startDate: new Date("September 4, 2017 10:13:00"), 
        endDate: new Date("September 6, 2017 10:13:00"), 
        duration:2
    }
    ];
    return {vacations};
  }
}
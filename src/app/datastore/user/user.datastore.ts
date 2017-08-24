import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class UserDataStore implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 1, username: "test", password:"test", firstname:"Jānis", lastname:"Testētājs", approver_id: 1, available_vac_days: 20},
      {id: 2, username: "f1", password:"f1", firstname:"Anna", lastname:"F1", approver_id: 1, available_vac_days: 32},
      {id: 3, username: "f2", password:"f2", firstname:"Pēteris", lastname:"Liepiņš", approver_id: 1, available_vac_days: 14}
    ];
    return {users};
  }
}
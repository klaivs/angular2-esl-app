import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class UserDataStore implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 1, username: "test", password:"test", firstname:"Jānis", lastname:"Tests" },
      {id: 2, username: "f1", password:"f1", firstname:"Anna", lastname:"F1" }
    ];
    return {users};
  }
}
import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend} from '@angular/http/testing';

import { UserService } from '../user/user.service';
import { VacationService } from './vacation.service';
import { User } from '../user/user';
import { Vacation } from './vacation';

describe('VacationService', () => {
    let test_vac = new Vacation();
    test_vac.id=1;
    test_vac.userId = 1;
    test_vac.startDate = new Date("September 4, 2017 10:13:00");
    test_vac.endDate = new Date("September 8, 2017 10:13:00");
    test_vac.duration = 5;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                HttpModule
            ],
            providers: [
                VacationService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    it('should be created', inject([VacationService], (service) => {
        expect(service).toBeTruthy();
    }));

    it('#getVacations, #update should return a Promise', inject([VacationService], (service) => {
        expect(service.getVacations(1)).toEqual(jasmine.any(Promise));
        expect(service.update(test_vac)).toEqual(jasmine.any(Promise));
    }));

    it('#getVacations should return an array of Vacations', inject([VacationService, XHRBackend], (service, mockBackend) => {
        const mockResponse = {
            data: [
                {id: 1, userId: 1, startDate: new Date("September 4, 2017 10:13:00"), endDate: new Date("September 6, 2017 10:13:00"), duration:3},
                {id: 2, userId: 1, startDate: new Date("September 20, 2017 10:13:00"), endDate: new Date("September 21, 2017 10:13:00"), duration:2}
            ]
        };
        mockBackend.connections.subscribe((connection) => {     // This is called every time someone subscribes to an http call. Here we want to fake the http response.
            connection.mockRespond(new Response(new ResponseOptions({   
                body: JSON.stringify(mockResponse)
            })));
        });
        service.getVacations(1)
        .then((response)=>{
            expect(response.length).toBe(2);
        })
    }));
});

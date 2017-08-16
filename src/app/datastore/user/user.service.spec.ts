import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend} from '@angular/http/testing';

import { UserService } from './user.service';
import { User } from './user';

describe('UserService', () => {
    let test_usr = new User();
    test_usr.id=1;
    test_usr.username = 'test_usern';
    test_usr.password = 'test_passw';
    test_usr.firstname = 'test_firstname';
    test_usr.lastname = 'test_lastname';
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[
                HttpModule
            ],
            providers: [
                UserService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
    });

    it('should be created', inject([UserService], (service) => {
        expect(service).toBeTruthy();
    }));

    it('#login, #getUser and #update should return a Promise', inject([UserService], (service) => {
        expect(service.login("test","test")).toEqual(jasmine.any(Promise));
        expect(service.getUser("test")).toEqual(jasmine.any(Promise));
        expect(service.update(test_usr)).toEqual(jasmine.any(Promise));
    }));

    it('#logout should delete this.loggedInUser', inject([UserService], (service) => {
        service.logout();
        expect(service.getLoggedInUser()).not.toBeDefined();
    }));

    it('#getLoggedInUser #login and #logout should work', inject([UserService, XHRBackend], (service, mockBackend) => {
        const mockResponse = {
            data: [
                {id: 1, username: "test", password:"test", firstname:"Jānis", lastname:"Tests" }
            ]
        };
        mockBackend.connections.subscribe((connection) => {     // This is called every time someone subscribes to an http call. Here we want to fake the http response.
            connection.mockRespond(new Response(new ResponseOptions({   
                body: JSON.stringify(mockResponse)
            })));
        });
        expect(service.getLoggedInUser()).not.toBeDefined();
        service.login("test","test")
            .then( usr => {
                expect(service.getLoggedInUser()).toBe(usr);
            })
            .then(() =>{
                service.logout();
                expect(service.getLoggedInUser()).not.toBeDefined();
            });

    }));

    it('#update should work', inject([UserService, XHRBackend], (service, mockBackend) => {
        const mockResponse = {
            data: [
                {id: 1, username: "test", password:"test", firstname:"Jānis", lastname:"Tests" }
            ]
        };
        mockBackend.connections.subscribe((connection) => {     // This is called every time someone subscribes to an http call. Here we want to fake the http response.
            connection.mockRespond(new Response(new ResponseOptions({   
                body: JSON.stringify(mockResponse)
            })));
        });
        service.update(test_usr)
            .then( usr => {
                expect(usr).toBe(test_usr);
            })
    }));

});

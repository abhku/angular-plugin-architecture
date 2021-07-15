import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppCoreService {
    private identifier = Math.random() * 100 + '-' + Date.now();
    constructor() {
        console.log('constructor called');
    }

    doSomething(caller: string) {
        alert(`${this.identifier}: Doing Something for ${caller}: I just know this for now!!`);
    }
}

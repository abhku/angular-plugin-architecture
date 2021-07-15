import { Component, OnInit } from '@angular/core';
import { AppCoreService } from './app-core.service';

@Component({
    selector: 'lib-app-core',
    template: `
    <p>
      lib: app-core works!
    </p>
    <button (click)="clicked()">App-Core-Click-Me</button>
  `,
    styles: [
    ]
})
export class AppCoreComponent implements OnInit {

    constructor(private _coreService: AppCoreService) { }

    ngOnInit(): void {
    }
    clicked() {
        this._coreService.doSomething('library');
    }
}

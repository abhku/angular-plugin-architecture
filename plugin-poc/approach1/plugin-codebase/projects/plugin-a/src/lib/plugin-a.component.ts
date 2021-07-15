import { Component, OnInit } from '@angular/core';
import { AppCoreService } from 'app-core';

@Component({
    selector: 'lib-plugin-a',
    template: `
    <p>
      plugin-a works!
    </p>
    <lib-app-core></lib-app-core>
    <button (click)="clicked()">Plugin-A-Click-Me</button>
  `,
    styles: [
    ]
})
export class PluginAComponent implements OnInit {

    constructor(private _coreService: AppCoreService) { }

    ngOnInit(): void {
    }

    clicked() {
        this._coreService.doSomething('pligin-a');
    }
}

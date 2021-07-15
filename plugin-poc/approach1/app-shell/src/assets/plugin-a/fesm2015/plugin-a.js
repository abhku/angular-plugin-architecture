import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from 'app-core';
import { AppCoreModule } from 'app-core';

class PluginAService {
    constructor() { }
}
/** @nocollapse */ PluginAService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ PluginAService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PluginAComponent {
    constructor(_coreService) {
        this._coreService = _coreService;
    }
    ngOnInit() {
    }
    clicked() {
        this._coreService.doSomething('pligin-a');
    }
}
/** @nocollapse */ PluginAComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAComponent, deps: [{ token: i1.AppCoreService }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ PluginAComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.1", type: PluginAComponent, selector: "lib-plugin-a", ngImport: i0, template: `
    <p>
      plugin-a works!
    </p>
    <lib-app-core></lib-app-core>
    <button (click)="clicked()">Plugin-A-Click-Me</button>
  `, isInline: true, components: [{ type: i1.AppCoreComponent, selector: "lib-app-core" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-plugin-a',
                    template: `
    <p>
      plugin-a works!
    </p>
    <lib-app-core></lib-app-core>
    <button (click)="clicked()">Plugin-A-Click-Me</button>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.AppCoreService }]; } });

class PluginAModule {
}
/** @nocollapse */ PluginAModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ PluginAModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAModule, declarations: [PluginAComponent], imports: [AppCoreModule], exports: [PluginAComponent] });
/** @nocollapse */ PluginAModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAModule, imports: [[
            AppCoreModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0, type: PluginAModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PluginAComponent
                    ],
                    imports: [
                        AppCoreModule,
                    ],
                    entryComponents: [PluginAComponent],
                    exports: [
                        PluginAComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of plugin-a
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PluginAComponent, PluginAModule, PluginAService };
//# sourceMappingURL=plugin-a.js.map

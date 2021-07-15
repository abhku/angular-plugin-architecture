import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "app-core";
export class PluginAComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGx1Z2luLWNvZGViYXNlL3Byb2plY3RzL3BsdWdpbi1hL3NyYy9saWIvcGx1Z2luLWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQWVsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQW9CLFlBQTRCO1FBQTVCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUFJLENBQUM7SUFFckQsUUFBUTtJQUNSLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0lBVFEsZ0JBQWdCO29IQUFoQixnQkFBZ0Isb0RBVmY7Ozs7OztHQU1YOzJGQUlVLGdCQUFnQjtrQkFaNUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7Ozs7R0FNWDtvQkFDQyxNQUFNLEVBQUUsRUFDUDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBDb3JlU2VydmljZSB9IGZyb20gJ2FwcC1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItcGx1Z2luLWEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBwbHVnaW4tYSB3b3JrcyFcbiAgICA8L3A+XG4gICAgPGxpYi1hcHAtY29yZT48L2xpYi1hcHAtY29yZT5cbiAgICA8YnV0dG9uIChjbGljayk9XCJjbGlja2VkKClcIj5QbHVnaW4tQS1DbGljay1NZTwvYnV0dG9uPlxuICBgLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGx1Z2luQUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb3JlU2VydmljZTogQXBwQ29yZVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5fY29yZVNlcnZpY2UuZG9Tb21ldGhpbmcoJ3BsaWdpbi1hJyk7XG4gICAgfVxufVxuIl19
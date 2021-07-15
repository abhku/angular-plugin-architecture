import { Compiler, Component, Injector, NgModuleFactory, ViewContainerRef } from '@angular/core';
import * as AngularCore from '@angular/core';
import * as AppCore from 'app-core';
import { AppCoreService } from 'projects/app-core/src/public-api';
const SystemJs = (window as any).System;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app-shell';
    pluginModuleFactoryName = 'PluginAModule';
    pluginUmdModulePath = '/assets/plugin-a/bundles/plugin-a.umd.js';

    constructor(private _compiler: Compiler, public injector: Injector, public viewContainer: ViewContainerRef, private _coreService: AppCoreService) { }

    clicked() {
        this._coreService.doSomething('app-shell');
    }

    load() {
        fetch(this.pluginUmdModulePath)
            .then(response => response.text())
            .then(async (source) => {
                //console.log(source);
                try {
                    const exports: any = {};
                    const module: any = {};
                    const modules: Record<string, any> = {
                        '@angular/core': AngularCore,
                        'app-core': AppCore,
                        // '@angular/common': AngularCommon,
                        // '@angular/router': AngularRouter,
                        // etc...
                    };

                    const require: any = (module: any) => {
                        console.log('require for ' + module);
                        return modules[module];
                    };
                    // tslint:disable-next-line:no-eval
                    eval(source);
                    console.log('evaluated');
                    console.log(exports);
                    // const moduleFactory: NgModuleFactory<any> = exports[this.pluginModuleFactoryName];
                    const moduleFactory: NgModuleFactory<any> = await this._compiler.compileModuleAsync(exports[this.pluginModuleFactoryName]);
                    const modRef = moduleFactory.create(this.injector);
                    const componentFactory = modRef.componentFactoryResolver.resolveComponentFactory(this.getEntryComponent(moduleFactory));
                    const component = componentFactory.create(modRef.injector);
                    const cmpRef = this.viewContainer.createComponent<any>(componentFactory);
                    cmpRef.instance.title = 'LOADED:)';
                } catch (e) {
                    console.error(e);
                }
            });
    }
    getEntryComponent(moduleFactory: NgModuleFactory<any>) {
        // search (<any>moduleFactory.moduleType).decorators[0].type.prototype.ngMetadataName === NgModule
        return (<any>moduleFactory.moduleType).decorators[0].args[0].entryComponents[0];
    }
}

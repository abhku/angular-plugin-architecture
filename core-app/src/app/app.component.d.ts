import { AfterViewInit, Compiler, Injector, ViewContainerRef } from '@angular/core';
export declare class AppComponent implements AfterViewInit {
    private _compiler;
    private _injector;
    content: ViewContainerRef;
    constructor(_compiler: Compiler, _injector: Injector);
    ngAfterViewInit(): void;
    private loadPlugins;
}

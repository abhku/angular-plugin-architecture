import {
  Compiler,
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularForms from '@angular/forms';
import * as angularPlatformBrowser from '@angular/platform-browser';

import * as appCore from 'app-core';

declare const System: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-core-demo';
  @ViewChild('content', { read: ViewContainerRef })
  content!: ViewContainerRef;

  constructor(private _compiler: Compiler, private _injector: Injector) {}

  ngAfterViewInit() {
    this.loadPlugins();
  }

  private async loadPlugins() {
    // import external module bundle
    const module = await System.import('assets/plugins/plugin-a.bundle.js');
    // const module = await loadModule(
    //   'plugin-a',
    //   'assets/plugins/plugin-a.bundle.js'
    // );

    // console.log(...System.entries());

    //load('assets/plugins/plugin-a.bundle.js');

    // compile module
    const moduleFactory = await this._compiler.compileModuleAsync<any>(
      module['PluginAModule']
    );

    // resolve component factory
    const moduleRef = moduleFactory.create(this._injector);

    //get the custom made provider name 'plugins'
    const componentProvider = moduleRef.injector.get('plugins');

    //from plugins array load the component on position 0
    const componentFactory =
      moduleRef.componentFactoryResolver.resolveComponentFactory<any>(
        componentProvider[0][0].component
      );

    //compile component
    var pluginComponent = this.content.createComponent(componentFactory);

    //sending @Input() values
    //pluginComponent.instance.anyInput = "inputValue";

    //accessing the component template view
    //(pluginComponent.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }
}

const moduleMap: Record<string, true> = {};

function load(pluginUmdModulePath: string) {
  fetch(pluginUmdModulePath)
    .then((response) => response.text())
    .then((source) => {
      try {
        const exports = {};
        const global = {};
        const modules: any = {
          core: angularCore,
          forms: angularForms,
          common: angularCore,
          platformBrowser: angularPlatformBrowser,
          appCore: appCore,
        };

        const require: any = (module: any) => modules[module];
        // tslint:disable-next-line:no-eval
        eval(source);
        console.log(exports);

        // const moduleFactory: NgModuleFactory<any> = exports[this.pluginModuleFactoryName];
        // const modRef = moduleFactory.create(this.injector);
        // const componentFactory = modRef.componentFactoryResolver.resolveComponentFactory(this.getEntryComponent(moduleFactory));
        // const component = componentFactory.create(modRef.injector);
        // const cmpRef = this.viewContainer.createComponent<any>(componentFactory);
        // cmpRef.instance.title = 'LOADED:)';
      } catch (e) {
        console.error(e);
      }
    });
}

export function loadModule(id: string, umdFileName: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    if (moduleMap[id]) {
      resolve(window);
      return;
    }

    const script = document.createElement('script');
    script.src = umdFileName;

    script.onerror = reject;

    script.onload = (res) => {
      console.log(res);

      moduleMap[id] = true;
      resolve(window); // window is the global namespace
    };

    document.body.append(script);
  });
}

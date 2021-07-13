import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const System: any;

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularForms from '@angular/forms';
import * as angularPlatformBrowser from '@angular/platform-browser';

import * as appCore from 'app-core';

System.set('@angular/core', System.newModule(angularCore));
System.set('@angular/common', System.newModule(angularCommon));
System.set('@angular/forms', System.newModule(angularForms));
System.set('app-core', System.newModule(appCore));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

export function initExternals() {
  (window as any).core = angularCore;
  (window as any).forms = angularForms;
  (window as any).common = angularCommon;
  (window as any).platformBrowser = angularPlatformBrowser;
  (window as any).appCore = appCore;

  // if (!production) {
  //   (
  //     window as any
  //   ).ng.platformBrowserDynamic = require('@angular/platform-browser-dynamic');
  //   (window as any).ng.compiler = require('@angular/compiler');
  // }
}

// initExternals();

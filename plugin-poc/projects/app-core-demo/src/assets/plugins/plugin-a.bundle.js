(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('app-core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', 'app-core'], factory) :
	(factory((global['plugin-a'] = {}),global.core,global.common,global.forms,global.appCore));
}(this, (function (exports,core,common,forms,appCore) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var PluginAComponent = /** @class */ (function () {
    function PluginAComponent() {
    }
    PluginAComponent = __decorate([
        core.Component({
            selector: 'plugin-a-component',
            template: "<form #myForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" required />\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"alterEgo\">Alter Ego</label>\n    <input type=\"text\" class=\"form-control\" id=\"alterEgo\" />\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n</form>\n<lib-message></lib-message>\n",
        }),
        __metadata("design:paramtypes", [])
    ], PluginAComponent);
    return PluginAComponent;
}());

var PluginAModule = /** @class */ (function () {
    function PluginAModule() {
    }
    PluginAModule = __decorate([
        core.NgModule({
            imports: [common.CommonModule, forms.FormsModule, appCore.AppCoreWidgetsModule, appCore.AppCoreModule],
            declarations: [PluginAComponent],
            entryComponents: [PluginAComponent],
            providers: [
                {
                    provide: 'plugins',
                    useValue: [
                        {
                            name: 'plugin-a-component',
                            component: PluginAComponent,
                        },
                    ],
                    multi: true,
                },
            ],
        })
    ], PluginAModule);
    return PluginAModule;
}());

exports.PluginAModule = PluginAModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));

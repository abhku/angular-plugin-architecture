(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('app-core')) :
    typeof define === 'function' && define.amd ? define('plugin-a', ['exports', '@angular/core', 'app-core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['plugin-a'] = {}, global.ng.core, global.i1));
}(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var PluginAService = /** @class */ (function () {
        function PluginAService() {
        }
        return PluginAService;
    }());
    /** @nocollapse */ PluginAService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    /** @nocollapse */ PluginAService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var PluginAComponent = /** @class */ (function () {
        function PluginAComponent(_coreService) {
            this._coreService = _coreService;
        }
        PluginAComponent.prototype.ngOnInit = function () {
        };
        PluginAComponent.prototype.clicked = function () {
            this._coreService.doSomething('pligin-a');
        };
        return PluginAComponent;
    }());
    /** @nocollapse */ PluginAComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAComponent, deps: [{ token: i1__namespace.AppCoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    /** @nocollapse */ PluginAComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.1", type: PluginAComponent, selector: "lib-plugin-a", ngImport: i0__namespace, template: "\n    <p>\n      plugin-a works!\n    </p>\n    <lib-app-core></lib-app-core>\n    <button (click)=\"clicked()\">Plugin-A-Click-Me</button>\n  ", isInline: true, components: [{ type: i1__namespace.AppCoreComponent, selector: "lib-app-core" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-plugin-a',
                        template: "\n    <p>\n      plugin-a works!\n    </p>\n    <lib-app-core></lib-app-core>\n    <button (click)=\"clicked()\">Plugin-A-Click-Me</button>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AppCoreService }]; } });

    var PluginAModule = /** @class */ (function () {
        function PluginAModule() {
        }
        return PluginAModule;
    }());
    /** @nocollapse */ PluginAModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ PluginAModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAModule, declarations: [PluginAComponent], imports: [i1.AppCoreModule], exports: [PluginAComponent] });
    /** @nocollapse */ PluginAModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAModule, imports: [[
                i1.AppCoreModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.1", ngImport: i0__namespace, type: PluginAModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PluginAComponent
                        ],
                        imports: [
                            i1.AppCoreModule,
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

    exports.PluginAComponent = PluginAComponent;
    exports.PluginAModule = PluginAModule;
    exports.PluginAService = PluginAService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=plugin-a.umd.js.map

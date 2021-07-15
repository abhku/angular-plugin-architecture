import { NgModule } from '@angular/core';
import { PluginAComponent } from './plugin-a.component';
import { AppCoreModule } from 'app-core';

@NgModule({
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
})
export class PluginAModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginAComponent } from './plugin-a.component';
import { FormsModule } from '@angular/forms';
import { AppCoreModule, AppCoreWidgetsModule } from 'app-core';

@NgModule({
  imports: [CommonModule, FormsModule, AppCoreWidgetsModule, AppCoreModule],
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
export class PluginAModule {}

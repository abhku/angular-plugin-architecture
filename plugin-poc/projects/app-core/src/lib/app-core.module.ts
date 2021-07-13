import { NgModule } from '@angular/core';
import { AppCoreWidgetsModule } from './app-core-widgets.module';
import { AppCoreComponent } from './app-core.component';

@NgModule({
  declarations: [AppCoreComponent],
  imports: [AppCoreWidgetsModule],
  exports: [AppCoreComponent, AppCoreWidgetsModule],
})
export class AppCoreModule {}

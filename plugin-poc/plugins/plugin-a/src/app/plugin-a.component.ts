import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppCoreService } from 'app-core';

@Component({
  selector: 'plugin-a-component',
  templateUrl: './plugin-a.component.html',
})
export class PluginAComponent {
  public myForm: NgForm;

  constructor() {}
}

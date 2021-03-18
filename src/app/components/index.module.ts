import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxInputTextComponent } from './ngx-input-text/ngx-input-text.component';
import { NgxDropdownComponent } from './ngx-dropdown/ngx-dropdown.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [NgxInputTextComponent, NgxDropdownComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    NgxInputTextComponent, NgxDropdownComponent, MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

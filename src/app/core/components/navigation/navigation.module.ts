import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [
    NavigationComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LogoModule
  ], 
  exports: [

    NavigationComponent,
  ],
    
})
export class NavigationModule { }

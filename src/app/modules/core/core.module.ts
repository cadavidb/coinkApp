import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialAppModule } from '../material/material.module';



@NgModule({
  exports:[
    CommonModule,
    MaterialAppModule,
    FlexLayoutModule,
  ]
})
export class CoreAppModule { }

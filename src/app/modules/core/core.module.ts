import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialAppModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  imports:[
    SweetAlert2Module.forRoot(),
  ],
  exports:[
    CommonModule,
    MaterialAppModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    FlexLayoutModule,
  ]
})
export class CoreAppModule { }

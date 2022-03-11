import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports:[
    ComponentsModule
  ]
})
export class SharedModule { }

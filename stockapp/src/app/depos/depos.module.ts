import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeposRoutingModule } from './depos-routing.module';
import { DeposComponent } from './depos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [DeposComponent, AddComponent, ListComponent],
  imports: [
    CommonModule,
    DeposRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeposModule { }

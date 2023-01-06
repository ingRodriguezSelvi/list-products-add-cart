import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MaterialModule} from "../../material/material.module";
import {RouterLink} from "@angular/router";
import {CurrencyChangePipe} from "./pipes/currency-change.pipe";



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CurrencyChangePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink
  ],
  exports: [
    NavBarComponent,
    CurrencyChangePipe
  ]
})
export class SharedModule { }

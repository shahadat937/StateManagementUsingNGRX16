import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterInputComponent } from "./counter-input/counter-input.component";
import { CounterValueComponent } from "./counter-value/counter-value.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

const routes:Routes=[
{path:'',component:CounterComponent}
    
]


@NgModule({
 declarations:[
        CounterButtonComponent,
        CounterValueComponent,
        CounterInputComponent,
        CustomInputComponent,
        CounterComponent,

 ],
 imports:[
       CommonModule,
       FormsModule,
       RouterModule.forChild(routes)
 ],
 exports:[]   
})

export class CounterModule
{
 
}
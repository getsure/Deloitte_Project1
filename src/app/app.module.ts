import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChiruComponent } from './chiru/chiru.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { MyColorDirective } from './directives/my-color.directive';
import { CustomizedPipesComponent } from './customized-pipes/customized-pipes.component';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { ProductsComponent } from './products/products.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyuppercasePipe } from './pipes/myuppercase.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ChiruComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    InterpolationBindingComponent,
    TwoWayDataBindingComponent,
    StructuralDirComponent,
    AttributeDirComponent,
    MyColorDirective,
    CustomizedPipesComponent,
    PredefinedPipesComponent,
    ProductsComponent,
    EmployeesComponent,
    MyuppercasePipe,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    TemplateDriveFormComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

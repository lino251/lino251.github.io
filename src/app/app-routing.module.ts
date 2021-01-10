import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyConverterComponent} from '../app/currency-converter/currency-converter.component';
import {LengthUnitConverterComponent} from '../app/length-unit-converter/length-unit-converter.component';

const routes: Routes = [{path: 'currency-converter', component: CurrencyConverterComponent},
{path: 'unit-converter', component: LengthUnitConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

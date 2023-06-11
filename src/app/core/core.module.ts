import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSTANTS, ConstantsService } from './models/constant';
import { GeneratorService } from './services/generator.service';
import { GeneratorFactory } from './services/generator.factory';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: CONSTANTS },
    GeneratorService,
    { provide: 'generatedString', useFactory: GeneratorFactory, deps: [GeneratorService] }
  ],
})
export class CoreModule { }

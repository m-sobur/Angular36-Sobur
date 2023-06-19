import { Component, Inject, Optional } from '@angular/core';
import { ConstantsService } from '../core/models/constant';
import { genID } from '../core/services/gen-id.generator';
import { generatedString, GenerateRandomNumber } from '../core/services/generator.factory';
import { GeneratorService } from '../core/services/generator.service';
import { LocalStorageService } from '../core/services/local-storage.service';

enum Category {
  Category1 = 'Category1',
  Category2 = 'Category2',
  Category3 = 'Category3'
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    GeneratorService,
    { provide: genID, useFactory: genID },
    { provide: generatedString, useFactory: GenerateRandomNumber(32), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: localStorage },
    { provide: ConstantsService, useValue: { App: "TaskManager", Ver: "1.0", API_URL: "http://..." } }
  ]
})
export class FirstComponent {
  category: Category = Category.Category1;


  name: string = 'Product name';
  description: string = 'Product description';
  price: number = 100;
  isAvailable: boolean = false;

  categories = Object.values(Category);

  generatedId1!: any;
  generatedId2!: any;

  constructor(
    @Optional() @Inject(LocalStorageService) private localStorage: Storage,
    @Optional() @Inject(ConstantsService) public constantsService: ConstantsService,
    @Optional() @Inject(generatedString) public generatedString: string,
    @Optional() @Inject(genID) private generateID: Generator
  ) {
  }

  ngOnInit(): void {
    this.generatedId1 = this.generateID?.next().value[0];
    this.generatedId2 = this.generateID?.next().value[0];

    this.localStorage?.setItem("key", "Stored data");
  }

  public getStoredValue(): string {
    return this.localStorage?.getItem("key") ?? "";
  }

}

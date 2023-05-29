import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Catalog} from '../myform/class/catalog';
import { ValidatorDateService } from '../myform/Service/validator.servise';
import { ValidatorDayDateService } from '../myform/Service/validator-day-date.service';

@Component({
   selector: 'app-updateform',
   templateUrl: './updateform.component.html',
   styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

   @Input() catalog!: Catalog;
   @Input() show: boolean = true;
   @Output() cityChange: EventEmitter<Catalog> = new EventEmitter<Catalog>();
   @Output() showChange = new EventEmitter();
   constructor() { }
   validate_date(c: string): boolean {
    let validator = new ValidatorDateService();
    if (c)
       if (!validator.validate_date(c)) return false; else return true;
    else return true;
   }
   save(n: any, pib: any, area: any, pop: any) {
   this.show = false;
     this.catalog = new Catalog(n, pib, area, pop, this.catalog.region);
     this.cityChange.emit(this.catalog);
     this.showChange.emit(this.show);
    }


    ngOnInit() { }
 
 }
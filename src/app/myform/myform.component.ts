import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
import { Catalog } from './class/catalog';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-myform',
  templateUrl:'./myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  catalogForm!:FormGroup;
  catalog!: Catalog;

  @Output() cityAdd: EventEmitter<Catalog> = new EventEmitter<Catalog>();
  datePattern = "^[0-9]{2}[.-/][0-9]{2}[.-/][0-9]{4}$";
  constructor(private fb:FormBuilder ,private alertController:AlertController) {
    this.catalogForm = this.fb.group({
      npap_name: ['',[Validators.required]],
      npap_pib:['',,[Validators.required]],
      npap_area: ['',],
      npap_pop: [''],
      region: new FormArray([new FormControl]),
    });
   }
   addNpap() {
    console.log("Add");
    (this.catalogForm.controls['region'] as FormArray).push(
       new FormControl()
    )
 }

 deleteNpap(i: any) {
    console.log("Delete");
    (this.catalogForm.controls['region'] as FormArray).removeAt(i)
 }
 getControls(){ return (this.catalogForm.get('region')as FormArray).controls;}

 onSubmit(){
  let name = this.catalogForm.value.npap_name;
  let pib = this.catalogForm.value.npap_pib;
  let area = this.catalogForm.value.npap_area;
  let pop = this.catalogForm.value.npap_pop;
  let region = this.catalogForm.value.region;
  this.catalog = new Catalog(name,pib,area,pop,region);
  console.log("Submit");
  this.cityAdd.emit(this.catalog);
}
ngOnInit() {}
async presentAlert(message: string) {
  const alert = await this.alertController.create({
     header: 'Помилка',
     subHeader: '',
     message: message,
     buttons: ['OK'],
  });

  await alert.present();
}
  

}

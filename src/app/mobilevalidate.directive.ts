import { Directive } from '@angular/core';
import { NG_VALIDATORS ,FormControl,Validators} from '@angular/forms';

@Directive({
  selector: '[Mobilevalidate]',
  providers:[{multi:true,
    useExisting:MobilevalidateDirective,
    provide:NG_VALIDATORS
  }]

})
export class MobilevalidateDirective implements Validators{

  constructor() { }
  validate(ctrl:FormControl){
    let x: string = ctrl.value.toString(); // Convert number to string
    if (x.length === 10) {
      return null; // Valid
    } 
    else 
    {
    return { invalidLength: true }; // Invalid
    }

  }


}

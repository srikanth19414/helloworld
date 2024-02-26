import {FormControl,FormModule,ReactiveFormsModule} from '@angular/forms';

imports:[
  CommonModule,
  ReactiveFormsModule
],
  applyForm=new Form Group({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
});
submitApplication() {
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}

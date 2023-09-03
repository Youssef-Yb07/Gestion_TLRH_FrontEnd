import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl , FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { Role } from 'src/app/classes/role';
import { Technologie } from 'src/app/classes/technologie';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.css'],
})
export class AddCollabComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private collaborateurService:CollaborateurService,private roleService:RoleService) {
  }
  managers:Collaborateur[];
  roles:Role[]=[];
  collab:Collaborateur=new Collaborateur();
  selectedRole: Role[] = [];
  num:number=0;
  technologies:Technologie[]=[];

  
  ngOnInit() {
    this.getManagers();
    this.getRoles();
   }
  getRoles() {
    this.roleService.getAllRoles().subscribe(
      (data) => {
        this.roles = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  getManagers() {
    this.collaborateurService.getAllManagerRH().subscribe(
      (data) => {
        this.managers = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
thirdFormGroup = this._formBuilder.group({
  thirdCtrl: ['', Validators.required],
});

 generateNumberArray(length: number): number[] {
  console.log(Array.from({ length }, (_, index) => index));
  return Array.from({ length }, (_, index) => index);
}


submitForm():void {
  console.log(this.technologies);
  console.log(this.collab.roles);
  this.collab.roles = [...this.selectedRole]; 

  console.log(this.collab.roles);
  console.log(this.collab);
  console.log(this.collab.managerRH);


  this.collaborateurService.createCollaborateur(this.collab).subscribe(
    (response) => {
      
    },
    (error) => {
      
    }
  );
}






}


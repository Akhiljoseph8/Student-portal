import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 sid:any=""
 stud:any=""
 constructor(private ar:ActivatedRoute){
  this.ar.params.subscribe((res:any)=>{
    this.sid=res.id
    console.log(this.sid)
  })
  this.stud=this.students.find(item=>item.id==this.sid)
 }

 students=[
  {id:1, name:"Ajith",dob:"06/04/2000",class:"bca",fee:2000},
  {id:2, name:"Sujith",dob:"06/04/2000",class:"bca",fee:2000},
  {id:3, name:"Amal",dob:"06/04/2000",class:"bca",fee:2000}
]


}

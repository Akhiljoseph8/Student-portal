import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  students=[
    {id:1, name:"Ajith",dob:"06/04/2000",class:"bca",fee:2000},
    {id:2, name:"Sujith",dob:"06/04/2000",class:"bca",fee:2000},
    {id:3, name:"Amal",dob:"06/04/2000",class:"bca",fee:2000}
  ]
}

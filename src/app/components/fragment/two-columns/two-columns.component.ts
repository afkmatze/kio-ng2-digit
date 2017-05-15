import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.scss']
})
export class TwoColumnsComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

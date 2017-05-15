import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-single-column',
  templateUrl: './single-column.component.html',
  styleUrls: ['./single-column.component.scss']
})
export class SingleColumnComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

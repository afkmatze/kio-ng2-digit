import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-two-columns-and-image',
  templateUrl: './two-columns-and-image.component.html',
  styleUrls: ['./two-columns-and-image.component.scss']
})
export class TwoColumnsAndImageComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

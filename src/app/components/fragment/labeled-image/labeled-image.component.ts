import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-labeled-image',
  templateUrl: './labeled-image.component.html',
  styleUrls: ['./labeled-image.component.scss']
})
export class LabeledImageComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

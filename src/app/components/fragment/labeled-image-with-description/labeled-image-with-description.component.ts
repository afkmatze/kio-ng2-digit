import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-labeled-image-with-description',
  templateUrl: './labeled-image-with-description.component.html',
  styleUrls: ['./labeled-image-with-description.component.scss']
})
export class LabeledImageWithDescriptionComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

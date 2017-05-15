import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-labeled-image-with-mophing',
  templateUrl: './labeled-image-with-mophing.component.html',
  styleUrls: ['./labeled-image-with-mophing.component.scss']
})
export class LabeledImageWithMophingComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

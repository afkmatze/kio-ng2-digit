import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-meta-image',
  templateUrl: './meta-image.component.html',
  styleUrls: ['./meta-image.component.scss']
})
export class MetaImageComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

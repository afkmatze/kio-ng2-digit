import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-meta-box',
  templateUrl: './meta-box.component.html',
  styleUrls: ['./meta-box.component.scss']
})
export class MetaBoxComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

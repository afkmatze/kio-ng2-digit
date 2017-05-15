import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-big-pic',
  templateUrl: './big-pic.component.html',
  styleUrls: ['./big-pic.component.scss']
})
export class BigPicComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

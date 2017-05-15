import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.scss']
})
export class OutroComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

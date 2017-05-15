import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

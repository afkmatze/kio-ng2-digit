import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-nbagroup',
  templateUrl: './nbagroup.component.html',
  styleUrls: ['./nbagroup.component.scss']
})
export class NBAGroupComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

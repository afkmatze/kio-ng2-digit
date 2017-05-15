import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss']
})
export class NBAComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

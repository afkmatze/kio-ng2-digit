import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-panel-chapter',
  templateUrl: './panel-chapter.component.html',
  styleUrls: ['./panel-chapter.component.scss']
})
export class PanelChapterComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

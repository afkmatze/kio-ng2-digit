import { Component, OnInit } from '@angular/core';
import { FragmentContent } from 'kio-ng2-structure'

@Component({
  selector: 'kio-text-and-audio',
  templateUrl: './text-and-audio.component.html',
  styleUrls: ['./text-and-audio.component.scss']
})
export class TextAndAudioComponentComponent extends FragmentContent {

  onNodeUpdate(){
    super.onNodeUpdate()    
  }

}

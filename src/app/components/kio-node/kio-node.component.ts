import { Component, Input, OnInit } from '@angular/core';
import { KioBackendService } from '../../api/services/backend.service'
import { KioQueryResult, KioPublicationModel, KioContentModel } from 'kio-ng2'

@Component({
  selector: 'app-kio-node',
  templateUrl: './kio-node.component.html',
  styleUrls: ['./kio-node.component.css']
})
export class KioNodeComponent implements OnInit {

  constructor(private backend:KioBackendService) { }

  @Input() node:KioContentModel

  data:any
  modifiers:string
  text:string

  loadContent(){
    this.node.type
    this.backend.loadNodeContent(this.node,{}).subscribe ( content => {
      this.data = JSON.stringify(content.data,null,' ')
      if ( content.data.text )
      {
        this.text = content.data.text
      }
    } )
  }

  ngOnInit() {
    this.modifiers = JSON.stringify(this.node.modifiers)
    this.loadContent()
  }

}

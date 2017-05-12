import { Component, Input, OnInit } from '@angular/core';
import { KioQueryResult, KioFragmentModel, KioNodeModel, KioPublicationModel, KioContentModel } from 'kio-ng2'


@Component({
  selector: 'app-node-info',
  templateUrl: './node-info.component.html',
  styleUrls: ['./node-info.component.scss']
})
export class NodeInfoComponent<T extends KioNodeModel> implements OnInit {

  constructor() { }

  @Input()
  node:T

  nodeType:string
  nodeId:string
  nodeLocale:string
  nodeModifiers:string[]

  ngOnInit() {
    this.nodeType = this.node.type
    this.nodeId = this.node.cuid
    this.nodeLocale = this.node.locale
    this.nodeModifiers = this.node.modifiers
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { KioBackendService } from '../../api/services/backend.service'
import { KioQueryResult, KioFragmentModel, KioPublicationModel, KioContentModel } from 'kio-ng2'

@Component({
  selector: 'app-kio-fragment',
  templateUrl: './kio-fragment.component.html',
  styleUrls: ['./kio-fragment.component.css']
})
export class KioFragmentComponent  implements OnInit {

  constructor(private backend:KioBackendService) { }

  @Input() fragment:KioFragmentModel

  children=[]

  ngOnInit() {
    this.children = this.fragment.children
  }

}

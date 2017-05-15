import { Component, OnInit } from '@angular/core';
import { KioQueryResult, KioPublicationModel } from 'kio-ng2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  title = 'app works!';

  publicationId: string = "cj1bx5t5u0024lls9a7wxzc00"


  loadPublication(){
    /*this.backend.load({
      cuid: this.publicationId,
      locale: 'en_US',
      headers: true,
      cmd: 'get',
      role: 'pub'
    }).subscribe ( result => {
      this.result = result
      this.publication = new KioPublicationModel(result.data)
    } )*/
  }

  result:KioQueryResult
  publication:KioPublicationModel


  ngOnInit(){
    this.loadPublication()
  }
}

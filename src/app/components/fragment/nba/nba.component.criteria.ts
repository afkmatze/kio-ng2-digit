import { KioNodeType } from 'kio-ng2'
import { QueryableFragmentAnnotation } from 'kio-ng2-component-routing'

export const Criteria : QueryableFragmentAnnotation = {
  type: KioNodeType.fragment ,
  modifiers: ['nba' ] ,
  childTypes: ['txt','src','txt','txt','txt' ] 
}

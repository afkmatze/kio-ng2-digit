import { KioNodeType } from 'kio-ng2'
import { QueryableFragmentAnnotation } from 'kio-ng2-component-routing'

export const Criteria : QueryableFragmentAnnotation = {
  type: KioNodeType.fragment ,
  modifiers: [ ] ,
  childTypes: ['fragment.img','fragment.meta','txt','txt','txt','fragment.img' ] 
}

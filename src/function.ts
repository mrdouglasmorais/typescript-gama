
import { IPerson } from './interface'

export default function getPersonType(info: IPerson[] ,type: string){
  const findPerson = info.find( item => item.gender === type )
  return findPerson
}
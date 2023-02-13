import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}

const List = ({subs}: Props) => { 
  return (
    <>
        <ul>
            {
                subs.map((sub)=>{
                    return (
                    <li key={sub.login.uuid}>
                        <h2>{sub.name.first}</h2>
                        <img src={sub.picture.medium} alt={`imagen de ${sub.name}`}/>
                        <p>{sub.email}</p>
                    </li>
                )})
            }
        </ul>
    </>
  )
}

export default List
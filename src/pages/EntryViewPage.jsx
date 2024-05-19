import { useParams } from "react-router-dom";



export function EntryViewPage(){
    // localhost:3000/view/1
    // id = 1;
    let {id} = useParams();

    return(
        <div>

            <EntryParent id={id} />
        </div>
    )
}
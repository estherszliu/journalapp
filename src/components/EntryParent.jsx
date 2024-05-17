import { useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";


export default function EntryParent(props){

    let [editMode, setEditMode] = useState(false);

    return(
        <section>
            {editMode ? < EntryForm entryData={props.entryData} addEntry={props.addEntry}/> : <Entry entryData={props.entryData}/>}

            <button onClick={() => setEditMode(!editMode)}> Toggel Edit Mode</button>
        </section>
    )
}
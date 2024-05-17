
export default function EntryParent(props){

    let [editMode, setEditMode] = useState(false);

    return(
        <section>
            {editMode ? < EntryForm entryData={props.entryData} /> : <Entry entryData={props.entryData}/>}

            <button onClick={() => setEditMode(!editMode)}> Toggel Edit Mode</button>
        </section>
    )
}
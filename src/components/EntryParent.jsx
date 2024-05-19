import { useState, useEffect } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";
import { useJournalData } from "../contexts/BlogContext";

export default function EntryParent(props){

	let [editMode, setEditMode] = useState(false);

    let [journalEntry, setJournalEntry] = useState({});

    let journalEntries = useJournalData();

    useEffect(() => {
        let foundEntry = journalEntries.find(entry => entry.id === parseInt(props.id));
        if (foundEntry) {
            setJournalEntry(foundEntry);
            setEditMode(false);
        }
    },[journalEntries]);


	return(
		<section>
			{editMode ? <EntryForm entryData={journalEntry} /> : <Entry entryData={props.entryData} /> }

			<button onClick={() => setEditMode(!editMode)}>Toggle Edit Mode</button>
		</section>
	)
}